module.exports = {
  host: 'localhost',
  port: 7000,
  swaggerConfig: {
    'title': 'Test API Documentation',
    'description': 'This is a sample example of API documentation.'
  },
  dataBase: {
    host     : process.env.DATABASE_HOST || 'localhost',
    user     : process.env.DB_USER || 'root',
    password : 'mysqlPassword',
    database : 'dockerTest',
    port: process.env.DB_PORT || '3306'
  },
  successResponse: {
    header: {
      errNo: 200
    }
  },
  errorResponse: {
    header: {
      errNo: 401
    }
  }
};