import { cp, mkdir, rm, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const clientDir = join(process.cwd(), 'dist', 'client');
const nestedNext = join(clientDir, 'bam-iran', '_next');
const rootNext = join(clientDir, '_next');

await rm(rootNext, { recursive: true, force: true });
await mkdir(rootNext, { recursive: true });
await cp(nestedNext, rootNext, { recursive: true });
await rm(join(clientDir, 'bam-iran'), { recursive: true, force: true });
await writeFile(join(clientDir, '.nojekyll'), '');

console.log('GitHub Pages artifact prepared in dist/client.');
