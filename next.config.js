/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
// eslint-disable-next-line quotes
module.exports = {
  env: {
    NEXT_PUBLIC_URI: process.env.NEXT_PUBLIC_URI,
  },
};
module.exports = {
  future: {
    webpack5: true,
  },
};
module.exports = {
  future: {
    webpack5: true,
  },
  webpack(config, options) {
    console.log(options.webpack.version); // 5.18.0
    config.experiments = {};
    return config;
  },
};
