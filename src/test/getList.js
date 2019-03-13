const methods = require('../../config/methods');
function getList() {
  return new Promise((resolve, reject) => {
    let sql = `SELECT * from test`;
    methods.getSqlResult(sql)
    .then(res => {
      resolve(res)
    })
    .catch(err => {reject(err)})
  })
}

module.exports = {
  getList
};