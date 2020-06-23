const scripts = require('react-micro-frontend-scripts');

function start() {
  // --- ENV for 'development' only ---
  // process.env.DISABLE_DEV_SERVER = 'true';

  // --- ENV for ALL ---
  // process.env.IMAGE_INLINE_SIZE_LIMIT = '1000';
  // process.env.REACT_MICRO_FRONTEND_SHORT = 'rmf';
  // process.env.SPLIT_CHUNKS = 'true';
  // process.env.RUNTIME_CHUNK = 'true';
  process.env.POSTCSS_PRESET_ENV_STAGE = '1'; // default '3'

  scripts.runWebpack(scripts.envDevelopment, (config) => {
    const newConfig = scripts.helper.webpackConfigCallback(config);
    const key = Object.keys(newConfig.entry)[0];
    // Include parent route's project to develop easy
    newConfig.entry[key] = ['react-micro-frontend-app-example', newConfig.entry[key]];
    return newConfig;
  });
}

start();
