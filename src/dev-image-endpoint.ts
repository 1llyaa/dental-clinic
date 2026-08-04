import { readFile } from 'node:fs/promises';
import type { APIRoute } from 'astro';

const MIME: Record<string, string> = {
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.svg': 'image/svg+xml',
  '.gif': 'image/gif',
};

export const GET: APIRoute = async ({ request }) => {
  const href = new URL(request.url).searchParams.get('href');
  if (!href) return new Response('Missing href', { status: 400 });

  if (/^https?:\/\//.test(href)) {
    const res = await fetch(href);
    return new Response(res.body, { headers: res.headers });
  }

  const fsPath = decodeURIComponent(href.replace(/^\/@fs/, '').split('?')[0]);
  const ext = fsPath.slice(fsPath.lastIndexOf('.')).toLowerCase();

  try {
    const data = await readFile(fsPath);
    return new Response(data, {
      headers: { 'content-type': MIME[ext] ?? 'application/octet-stream' },
    });
  } catch {
    return new Response('Not found', { status: 404 });
  }
};
