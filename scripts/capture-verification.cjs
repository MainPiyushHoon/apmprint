const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const edgePath = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
const artifactDir = "C:\\Users\\HP\\.gemini\\antigravity-ide\\brain\\d0f80cb9-9629-4be9-b9a3-3c25f6ca20fb";

async function captureScreenshot(url, outputPath, width, height, actionFn = null) {
  console.log(`Capturing ${url} (${width}x${height}) -> ${path.basename(outputPath)}...`);
  const edge = spawn(edgePath, [
    '--headless',
    '--disable-gpu',
    '--remote-debugging-port=9222',
    `--window-size=${width},${height}`,
    url
  ]);

  await new Promise(r => setTimeout(r, 2200));

  try {
    const listRes = await fetch('http://127.0.0.1:9222/json/list');
    const tabs = await listRes.json();
    const tab = tabs.find(t => t.url.includes('localhost:5173') || t.url.includes('127.0.0.1:5173')) || tabs[0];
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

    await new Promise((resolve, reject) => {
      ws.onopen = async () => {
        try {
          if (actionFn) {
            await actionFn(sendCommand);
          }
          await new Promise(r => setTimeout(r, 600));
          const shot = await sendCommand('Page.captureScreenshot', { format: 'png' });
          const buffer = Buffer.from(shot.data, 'base64');
          fs.writeFileSync(outputPath, buffer);
          console.log(`Saved ${path.basename(outputPath)} (${(buffer.length / 1024).toFixed(1)} KB)`);
          resolve();
        } catch (e) {
          reject(e);
        }
      };
      ws.onerror = reject;
    });

    edge.kill();
  } catch (err) {
    console.error('Error capturing:', err);
    edge.kill();
    throw err;
  }
}

async function runAll() {
  // 1. Desktop Home Page Services Section
  await captureScreenshot(
    'http://localhost:5173/#services',
    path.join(artifactDir, 'desktop_home_service_cards.png'),
    1280,
    900,
    async (send) => {
      await send('Runtime.evaluate', {
        expression: `document.getElementById('services')?.scrollIntoView({ behavior: 'instant' });`
      });
    }
  );

  // 2. Desktop Modal Open
  await captureScreenshot(
    'http://localhost:5173/services/',
    path.join(artifactDir, 'desktop_modal_product_banner.png'),
    1280,
    900,
    async (send) => {
      await new Promise(r => setTimeout(r, 1200));
      await send('Runtime.evaluate', {
        expression: `
          const btn = document.querySelector('.card-btn.btn-secondary');
          if (btn) btn.click();
        `
      });
      await new Promise(r => setTimeout(r, 600));
    }
  );

  // 3. Mobile 2-Column Catalog Cards (375x812)
  await captureScreenshot(
    'http://localhost:5173/#services',
    path.join(artifactDir, 'mobile_2col_service_cards.png'),
    375,
    812,
    async (send) => {
      await send('Runtime.evaluate', {
        expression: `document.getElementById('services')?.scrollIntoView({ behavior: 'instant' });`
      });
    }
  );

  // 4. Services Directory Page
  await captureScreenshot(
    'http://localhost:5173/services/',
    path.join(artifactDir, 'desktop_services_directory.png'),
    1280,
    900,
    async (send) => {
      await send('Runtime.evaluate', {
        expression: `document.getElementById('all-services')?.scrollIntoView({ behavior: 'instant' });`
      });
    }
  );

  // 5. Cluster Landing Page (/services/bill-book-printing/)
  await captureScreenshot(
    'http://localhost:5173/services/bill-book-printing/',
    path.join(artifactDir, 'desktop_cluster_page_cards.png'),
    1280,
    900,
    async (send) => {
      await new Promise(r => setTimeout(r, 1200));
      await send('Runtime.evaluate', {
        expression: `document.querySelector('.cluster-services-grid')?.scrollIntoView({ behavior: 'instant' });`
      });
      await new Promise(r => setTimeout(r, 400));
    }
  );

  console.log('All verification screenshots captured!');
}

runAll().catch(e => {
  console.error(e);
  process.exit(1);
});
