'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/myroute', function (req, reply) {
    return {myroute: "working"}
  })
}
