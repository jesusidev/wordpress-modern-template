const esbuild = require('esbuild');

const { nodeExternalsPlugin } = require('esbuild-node-externals')

esbuild.build({
  entryPoints: ['./scripts/main.ts'],
  outfile: './scripts/bundle.js',
  bundle: true,
  minify: true,
  sourcemap: true,
  tsconfig: './tsconfig.json',
  loader: { ".svg": "dataurl", ".png": "dataurl" },
  define: {
    'process.env.NODE_ENV': "'production'"
  },
  plugins: [nodeExternalsPlugin()]
}).catch(() => process.exit(1))
