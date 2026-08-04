import type { ImageMetadata } from 'astro';

const photos = import.meta.glob<{ default: ImageMetadata }>('./*.{jpg,jpeg,png}', { eager: true });

export const teamPhotos: Record<string, ImageMetadata> = Object.fromEntries(
  Object.entries(photos).map(([path, mod]) => [path.replace('./', ''), mod.default])
);
