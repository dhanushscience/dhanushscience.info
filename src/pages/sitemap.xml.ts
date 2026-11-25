import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET({ site }: APIContext) {
  const posts = (await getCollection('blog', (p) => !p.data.draft)).sort((a, b) => +b.data.date - +a.data.date);
  const url = (path: string, d?: Date) =>
    `<url><loc>${new URL(path, site)}</loc>${d ? `<lastmod>${d.toISOString().slice(0, 10)}</lastmod>` : ''}</url>`;
  const body = [
    url('/', posts[0]?.data.date),
    url('/blog/', posts[0]?.data.date),
    ...posts.map((p) => url(`/blog/${p.id}/`, p.data.date)),
  ].join('');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${body}</urlset>`, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
