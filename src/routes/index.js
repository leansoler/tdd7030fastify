'use-strict';

module.exports = function (fastify, opts, done) {
  fastify.get('/temperature/:cityName', async request => {
    return null;
  });

  done();
};
