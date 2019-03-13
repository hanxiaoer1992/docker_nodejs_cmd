const connection = require('../dataBase');

function getSqlResult(sql, insertArray=[]) {
  return new Promise((resolve, reject) => {
    connection.query(sql,insertArray, function (error, results, fields) {
      if (error) {
        reject({error: 'getSqlResult error', info: error})
      }
      resolve(results)
    })
  })
}

module.exports = {
  getSqlResult
};