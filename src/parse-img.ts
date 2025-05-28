import { readFile } from 'fs/promises';
import { extname } from 'path';

export async function imageToBase64DataUrl(filePath: string) {
  const ext = extname(filePath).toLowerCase().replace('.', '');
  const mime = ext === 'jpg' ? 'jpeg' : ext;
  const buffer = await readFile(filePath);
  const base64 = buffer.toString('base64');
  return `data:image/${mime};base64,${base64}`;
}
