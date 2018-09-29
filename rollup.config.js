import postcss from 'rollup-plugin-postcss';

export default {
  input: 'build/index.js',
  external: ['react', 'react-dom', 'redux'],
  output: {
    file: 'public/build/bundle.js',
    format: 'iife',
    name: 'App',
    globals: {
      'react': 'React',
      'react-dom': 'ReactDOM',
      'redux': 'Redux'
    }
  },
  plugins: [
    postcss({
      plugins: []
    })
  ]
};