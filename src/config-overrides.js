// config-overrides.js
module.exports = function override(config, env) {
    // Add the fallback configuration for the "assert" module
    config.resolve = {
      ...config.resolve,
      fallback: {
        ...config.resolve.fallback,
        assert: require.resolve('assert/')
      }
    };
  
    return config;
  };
  