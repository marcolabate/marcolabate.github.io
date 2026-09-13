import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';

const root = resolve('out');
const args = process.argv.slice(2);
const option = (name, fallback) => args.includes(name) ? args[args.indexOf(name) + 1] : fallback;
const port = Number(option('--port', '3000'));
const host = option('--host', '127.0.0.1');
const types = { '.html':'text/html; charset=utf-8', '.css':'text/css', '.js':'text/javascript', '.json':'application/json', '.png':'image/png', '.jpg':'image/jpeg', '.webp':'image/webp', '.svg':'image/svg+xml', '.pdf':'application/pdf', '.txt':'text/plain; charset=utf-8', '.xml':'application/xml', '.webm':'video/webm', '.mp4':'video/mp4' };
await stat(resolve(root, 'index.html')).catch(() => {throw new Error('Run npm run build before starting the production preview.');});

createServer(async (req, res) => {
 try {
  const url = new URL(req.url, 'http://localhost');
  // A review-only viewport harness. It never enters the exported website.
  if (url.pathname === '/__review/') {
   const width = Math.min(1440, Math.max(280, Number(url.searchParams.get('width')) || 390));
   const height = Math.min(12000, Math.max(600, Number(url.searchParams.get('height')) || 844));
   const route = url.searchParams.get('route') || '/';
   const safeRoute = route.startsWith('/') && !route.startsWith('//') ? route.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;') : '/';
   const scale = Math.min(2, Math.max(1, Number(url.searchParams.get('text')) || 1));
   const textResize = scale > 1 ? `<script>document.querySelector('iframe').addEventListener('load',e=>{e.target.contentDocument.documentElement.style.fontSize='${scale*100}%';});</script>` : '';
   res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
   res.end(`<!doctype html><html><head><title>Portfolio viewport review</title><style>body{margin:0;background:#d1d5db;display:flex;justify-content:center}iframe{width:${width}px;height:${height}px;border:0;flex-shrink:0;display:block}</style></head><body><iframe title="Portfolio review" src="${safeRoute}"></iframe>${textResize}</body></html>`);
   return;
  }
  const path = resolve(root, '.' + decodeURIComponent(url.pathname));
  if (path !== root && !path.startsWith(root + sep)) {res.writeHead(403).end();return;}
  let file = path;
  const info = await stat(file).catch(() => null);
  if (info?.isDirectory()) {
   if (!url.pathname.endsWith('/')) {res.writeHead(308, {Location:url.pathname+'/'+url.search}).end();return;}
   file = resolve(file, 'index.html');
  }
  const content = await readFile(file).catch(() => null);
  if (!content) {res.writeHead(404, {'Content-Type':'text/html; charset=utf-8'});res.end(await readFile(resolve(root, '404.html')));return;}
  res.writeHead(200, {'Content-Type':types[extname(file)] || 'application/octet-stream'});
  res.end(req.method === 'HEAD' ? undefined : content);
 } catch {res.writeHead(400).end('Invalid request');}
}).listen(port, host, () => console.log(`Production export preview: http://${host}:${port}`));
