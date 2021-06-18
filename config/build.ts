const { build } = require('esbuild');
const fs = require('fs-extra');
const generateBuild = async () => {
await build({
    entryPoints: ['../scripts/main.ts'],
    outfile: '../scripts/bundle.js',
    bundle: true,
    minify: true,
    sourcemap: true,
    tsconfig: '../tsconfig.json',
    target: ['chrome58', 'firefox57', 'edge16'],
    loader: { ".svg": "dataurl", ".png": "dataurl" },
    define: {
      'process.env.NODE_ENV': "'production'"
    }
  }).catch(() => process.exit(1));
};
generateBuild();
