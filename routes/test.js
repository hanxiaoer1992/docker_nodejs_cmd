const Joi = require('joi');
const Test = require('../src/test');
const Config = require('../config/config');
let pathName = 'test';
let routeConfig = [
  {
    method: 'GET',
    path: '/' + pathName + '/getData',
    config: {
      description: 'get data from database',
      notes: 'get data from database',
      tags: ['api'],
      handler: function (request, reply) {
        Test.getList.getList()
          .then((res)=>{
            let response = {
              body: res,
              ...Config.successResponse
            };
            reply(response)
          })
          .catch((err)=>{
            let response = {
              body: {
                error: err
              },
              ...Config.errorResponse
            };
            reply(response)
          });
      }
    }
  },
];
module.exports = routeConfig;