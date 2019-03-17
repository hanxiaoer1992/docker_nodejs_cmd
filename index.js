const server=require('./server');
const Inert = require('inert');
const Vision = require('vision');
const HapiSwagger = require('hapi-swagger');
const Config = require('./config/config');

// swagger config
const options = {
    info: Config.swaggerConfig
};
server.register([
  Inert,
  Vision,
  {
    'register': HapiSwagger,
    'options': options
  }], (err) => {
    console.log('err', err)
  }
);
try {
    server.start();
}
catch (err) {
    console.log(err);
    process.exit(1);
}
process.on('SIGINT', () => {
  console.log('SIGINT signal received.')
  process.exit(1)
})

console.log('Server running at:', server.info.uri);