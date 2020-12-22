module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            'rrn-calendar-component': '../src/index',
          },
        },
      ],
    ],
  };
};
