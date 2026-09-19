const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const edgePath = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
const htmlPath = path.resolve(__dirname, 'generator-canvas.html');
const outDir = path.resolve(__dirname, '../public/images/products');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const productIds = [
  'bill-book',
  'challan-book',
  'letter-head',
  'school-registers',
  'school-id-cards',
  'office-files',
  'record-registers',
  'envelope',
  'other-stationery',
  'leaflet-pumplet',
  'brochure',
  'catalogue',
  'calenders',
  'tant-card',
  'dangler',
  'product-label',
  'sticker',
  'wall-clock',
  'wrist-watch',
  'flex-board',
  'back-drop',
  'glowsign-board',
  'dealers-board',
  'digital-vinyl',
  'one-way-vision',
  'sunpack',
  'rollup-standee',
  'canopy',
  'acp-cutting-board',
  'clip-on-board',
  'sandwich-board',
  'outdoor-branding'
];

console.log(`Starting headless Edge to render ${productIds.length} product mockups...`);

const edge = spawn(edgePath, [
  '--headless',
  '--disable-gpu',
  '--remote-debugging-port=9222',
  '--window-size=1200,900',
  `file:///${htmlPath.replace(/\\/g, '/')}`
]);

async function run() {
  await new Promise(r => setTimeout(r, 2000));
  try {
    const listRes = await fetch('http://127.0.0.1:9222/json/list');
    const tabs = await listRes.json();
    const tab = tabs.find(t => t.url.includes('generator-canvas')) || tabs[0];
    const ws = new WebSocket(tab.webSocketDebuggerUrl);

    let msgId = 1;
    const sendCommand = (method, params = {}) => {
      return new Promise((resolve, reject) => {
        const id = msgId++;
        const handler = (event) => {
          const data = JSON.parse(event.data);
          if (data.id === id) {
            ws.removeEventListener('message', handler);
            if (data.error) reject(data.error);
            else resolve(data.result);
          }
        };
        ws.addEventListener('message', handler);
        ws.send(JSON.stringify({ id, method, params }));
      });
    };

    ws.onopen = async () => {
      try {
        console.log('Connected to Edge DevTools WebSocket.');

        for (let i = 0; i < productIds.length; i++) {
          const pid = productIds[i];
          process.stdout.write(`Rendering [${i + 1}/${productIds.length}] ${pid}... `);

          const res = await sendCommand('Runtime.evaluate', {
            expression: `window.renderProduct("${pid}")`,
            returnByValue: true
          });

          if (!res || !res.result || !res.result.value) {
            throw new Error(`Failed rendering ${pid}: ` + JSON.stringify(res));
          }

          const dataUrl = res.result.value;
          const base64Data = dataUrl.replace(/^data:image\/\w+;base64,/, '');
          const buffer = Buffer.from(base64Data, 'base64');
          const destPath = path.join(outDir, `${pid}.webp`);
          fs.writeFileSync(destPath, buffer);
          console.log(`Saved (${(buffer.length / 1024).toFixed(1)} KB)`);
        }

        console.log('\nAll 32 product mockups successfully generated!');
        edge.kill();
        process.exit(0);
      } catch (err) {
        console.error('\nError during rendering:', err);
        edge.kill();
        process.exit(1);
      }
    };
  } catch (err) {
    console.error('Edge runner connection error:', err);
    edge.kill();
    process.exit(1);
  }
}

run();
