'use strict';
const Hapi = require('hapi');
const corsHeaders = require('hapi-cors-headers');
const route = require('./routes');
const Config = require('./config/config');

// Create a server with a host and port
let connectionOptions = {
    host: Config.host,
    port: Config.port
}
const server = new Hapi.Server();
const start = async () => {

  server.connection(connectionOptions);
  await server.register(require('inert'));
  // Add the route
  route.forEach(function (api) {
    server.route(api);
  });
  // Cors
  server.ext('onPreResponse', corsHeaders)
};
start();

module.exports = server;