export default function manifest() {
  return {
    name: 'TrybeNode - Digital Solutions',
    short_name: 'TrybeNode',
    description: 'Building cutting-edge e-commerce platforms, automated business systems, and IoT solutions',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#2d236d',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
