import { spawn } from 'node:child_process';

// Normal development still uses Next.js. The managed visual-review launcher
// supplies Vite-style flags; serve the production export for that mode so QA
// exercises the same files that GitHub Pages would publish.
const args = process.argv.slice(2);
if (args.includes('--strictPort')) {
  await import('./preview.mjs');
} else {
  const child = spawn(process.execPath, ['node_modules/next/dist/bin/next', 'dev', ...args], { stdio: 'inherit' });
  for (const signal of ['SIGINT', 'SIGTERM']) process.on(signal, () => child.kill(signal));
  child.on('exit', code => process.exit(code ?? 1));
}
