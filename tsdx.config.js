// Not transpiled with TypeScript or Babel, so use plain Es6/Node.js!
module.exports = {
  // This function will run for each entry/format/env combination
  rollup(config, options) {
    config.onwarn = ( warning, next ) => {
      if ( warning.code === 'CIRCULAR_DEPENDENCY' ) return;
      next( warning );
    };
    return config; // always return a config.
  },
};