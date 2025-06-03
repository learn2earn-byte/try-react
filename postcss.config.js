// postcss.config.js
// This configuration enables PostCSS with Tailwind CSS and Autoprefixer.
// In production, cssnano is added to minify CSS for optimized performance.

const isProd = process.env.NODE_ENV === 'production';

export default {
  plugins: {
    // Tailwind CSS for utility-first styling
    tailwindcss: {},
    // Autoprefixer to add vendor prefixes for cross-browser compatibility
    autoprefixer: {},
    // Cssnano to minify CSS in production for better performance
    ...(isProd && {
      cssnano: {},
    }),
  },
};
