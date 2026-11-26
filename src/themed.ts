import { existsSync } from 'node:fs';

// Light/dark image pairs by file name: photo.png + photo-dark.png in public/.
export function darkOf(src: string): string | undefined {
  const dark = src.replace(/(\.\w+)$/, '-dark$1');
  if (dark === src || !src.startsWith('/')) return;
  let file = dark;
  try { file = decodeURIComponent(dark); } catch { /* a literal % in the name */ }
  return existsSync('public' + file) ? dark : undefined;
}

// Adds the dark twin next to every <img> in a post body that has one.
export const themeImages = (html: string) =>
  html.replace(/<img\b[^>]*?\ssrc="([^"]+)"[^>]*>/g, (tag, src) => {
    const dark = darkOf(src);
    if (!dark) return tag;
    const as = (cls: string, url: string) => tag.replace(`src="${src}"`, () => `src="${url}" class="${cls}" loading="lazy"`);
    return as('only-light', src) + as('only-dark', dark);
  });
