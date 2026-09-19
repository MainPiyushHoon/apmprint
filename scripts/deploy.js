import { execSync } from 'child_process';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');
const worktreeDir = path.resolve(rootDir, '.gh-pages-deploy');

function run(cmd, cwd = rootDir) {
  console.log(`> ${cmd}`);
  execSync(cmd, { stdio: 'inherit', cwd });
}

console.log('🚀 Starting Instant Production Build & Deployment...');

// 1. Run full production build and static pre-rendering
run('npm run build');

// 2. Clean up any existing worktree if left behind
if (fs.existsSync(worktreeDir)) {
  try {
    run(`git worktree remove "${worktreeDir}" --force`);
  } catch {
    fs.rmSync(worktreeDir, { recursive: true, force: true });
    run('git worktree prune');
  }
}

// 3. Create isolated worktree for gh-pages branch
console.log('📦 Preparing deployment branch (gh-pages)...');
run(`git worktree add "${worktreeDir}" gh-pages`);

try {
  // Sync with remote gh-pages
  try {
    run('git pull origin gh-pages', worktreeDir);
  } catch (e) {
    console.log('Notice: Could not pull latest origin/gh-pages (proceeding with local branch)');
  }

  // Clear tracked files in worktree
  run('git rm -rf .', worktreeDir);

  // Copy dist contents into worktree
  console.log('📋 Copying dist bundle into deployment worktree...');
  fs.cpSync(distDir, worktreeDir, { recursive: true });

  // Stage all files
  run('git add -A', worktreeDir);

  // Check if there are changes to commit
  const status = execSync('git status --porcelain', { cwd: worktreeDir }).toString().trim();
  if (status.length > 0) {
    const timestamp = new Date().toISOString().replace('T', ' ').substring(0, 19);
    run(`git commit -m "deploy: update live site (${timestamp})"`, worktreeDir);
    console.log('🚀 Pushing directly to GitHub Pages (origin/gh-pages)...');
    run('git push origin gh-pages', worktreeDir);
    console.log('✅ Successfully deployed to gh-pages!');
  } else {
    console.log('ℹ️ No changes detected between dist and gh-pages.');
  }
} finally {
  // Remove worktree
  try {
    run(`git worktree remove "${worktreeDir}" --force`);
  } catch (e) {
    console.log('Cleaning up worktree directory...');
    fs.rmSync(worktreeDir, { recursive: true, force: true });
    run('git worktree prune');
  }
}

console.log('\n🎉 Deployment complete! Live site updated at: https://sandwalkers.org/');
