import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export async function GET({ site }: APIContext) {
  const posts = (await getCollection('blog', (p) => !p.data.draft)).sort((a, b) => +b.data.date - +a.data.date);
  const items = posts
    .map((p) => {
      const link = new URL(`/blog/${p.id}/`, site);
      return `<item><title>${esc(p.data.title)}</title><link>${link}</link><guid>${link}</guid><pubDate>${p.data.date.toUTCString()}</pubDate><description>${esc(p.data.description)}</description></item>`;
    })
    .join('');
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>Dhanush Science Blog</title><link>${new URL('/blog/', site)}</link><description>Notes and write-ups on embedded systems, AI, connected devices and building Project OASIS.</description><language>en</language>${items}</channel></rss>`,
    { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } },
  );
}
