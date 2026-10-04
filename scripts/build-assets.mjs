// After `astro build`: print /cv/ to public/Dmytro-Shved-CV.pdf and render the share image.
// Uses the locally installed Google Chrome. Run with `npm run cv`.
import { createServer } from 'node:http';
import { readFile, copyFile } from 'node:fs/promises';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { join, extname } from 'node:path';

const CHROME = process.env.CHROME ?? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const dist = new URL('../dist/', import.meta.url).pathname;
const root = new URL('../', import.meta.url).pathname;
const types = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.woff2': 'font/woff2', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp' };

const server = createServer(async (req, res) => {
  let path = decodeURIComponent(req.url.split('?')[0]);
  if (path.endsWith('/')) path += 'index.html';
  try {
    const body = await readFile(join(dist, path));
    res.writeHead(200, { 'content-type': types[extname(path)] ?? 'application/octet-stream' }).end(body);
  } catch {
    res.writeHead(404).end();
  }
}).listen(4329);

// Async on purpose: a blocking call would freeze the server Chrome is loading the CV from.
const run = promisify(execFile);
const chrome = (...args) => run(CHROME, ['--headless=new', '--disable-gpu', '--virtual-time-budget=8000', ...args]);

await chrome('--no-pdf-header-footer', `--print-to-pdf=${root}public/Dmytro-Shved-CV.pdf`, 'http://localhost:4329/cv/');
await chrome('--hide-scrollbars', '--force-device-scale-factor=1', '--window-size=1200,630', `--screenshot=${root}public/og-image.png`, `file://${root}scripts/og.html`);
await copyFile(`${root}public/Dmytro-Shved-CV.pdf`, `${dist}Dmytro-Shved-CV.pdf`);
await copyFile(`${root}public/og-image.png`, `${dist}og-image.png`);
server.close();
console.log('CV PDF and share image updated.');
