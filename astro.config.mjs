import { defineConfig } from 'astro/config';

// The home page is the static public/index.html. GitHub Pages serves it at "/", but `astro dev`
// only serves it at "/index.html", so links back to "/" (e.g. from the blog) 404 locally.
const serveHomeAtRoot = {
  name: 'serve-home-at-root',
  configureServer(server) {
    server.middlewares.use((req, _res, next) => {
      if (req.url === '/' || req.url.startsWith('/?')) req.url = '/index.html' + req.url.slice(1);
      next();
    });
  },
};

export default defineConfig({ site: 'https://dhanushscience.info', vite: { plugins: [serveHomeAtRoot] } });
