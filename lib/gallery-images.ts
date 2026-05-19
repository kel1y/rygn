import fs from 'node:fs';
import path from 'node:path';

const GALLERY_DIR = path.join(process.cwd(), 'public', 'images', 'gallery');
const GALLERY_URL_PREFIX = '/images/gallery';

const IMAGE_EXTENSIONS = new Set([
  '.jpg',
  '.jpeg',
  '.png',
  '.gif',
  '.webp',
  '.avif',
]);

export type GalleryImage = {
  src: string;
  alt: string;
};

function filenameToAlt(filename: string): string {
  const name = path.parse(filename).name;
  const readable = name.replace(/[-_]+/g, ' ').trim();
  return readable ? `RYGN gallery – ${readable}` : 'RYGN gallery photo';
}

export function getGalleryImages(): GalleryImage[] {
  if (!fs.existsSync(GALLERY_DIR)) {
    return [];
  }

  const filenames = fs
    .readdirSync(GALLERY_DIR, { withFileTypes: true })
    .filter((entry) => entry.isFile())
    .map((entry) => entry.name)
    .filter((name) => IMAGE_EXTENSIONS.has(path.extname(name).toLowerCase()))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

  return filenames.map((filename) => ({
    src: `${GALLERY_URL_PREFIX}/${encodeURIComponent(filename)}`,
    alt: filenameToAlt(filename),
  }));
}
