export async function loadPwaPlugin() {
  const pwa = await import('vite-plugin-pwa')
  return pwa.VitePWA({
    registerType: 'prompt', // 改为 prompt 以显示安装提示
    includeAssets: ['favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
    workbox: {
      globPatterns: ['**/*.{js,css,html,png,svg,ico,txt,woff,woff2}'],
    },
    manifest: {
      name: 'grow Template App',
      short_name: 'grow',
      description: 'A modern web application built with Vue and Ant Design',
      icons: [
        {
          src: '/icon-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: '/icon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
      theme_color: '#1890ff',
      background_color: '#ffffff',
      display: 'standalone',
      scope: '/',
      start_url: '/',
    },
    devOptions: {
      enabled: true, // 开发环境也启用 PWA
    },
  })
}
