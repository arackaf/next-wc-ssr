const getCache = ({ name, pattern }) => ({
  urlPattern: pattern,
  handler: "CacheFirst",
  options: {
    matchOptions: {
      ignoreVary: true,
    },
    cacheName: name,
    expiration: {
      maxEntries: 3,
      maxAgeSeconds: 60 * 60 * 24 * 365 * 2, //2 years
    },
    cacheableResponse: {
      statuses: [200],
    },
  },
});

module.exports = {
  swDest: "public/sw.js",
  runtimeCaching: [
    getCache({ pattern: /shoelace.*\.css/i, name: "shoelace-styles" }),
    getCache({ pattern: /shoelace-bundle.*\.js/i, name: "shoelace-js" }),
  ],
};
