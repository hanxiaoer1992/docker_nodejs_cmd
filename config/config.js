module.exports = {
  host: '0.0.0.0',
  port: 3000,
  swaggerConfig: {
    'title': 'Test API Documentation',
    'description': 'This is a sample example of API documentation.'
  },
  dataBase: {
    host     : process.env.DATABASE_HOST || 'localhost',
    user     : process.env.DB_USER || 'root',
    password : 'Yanan920924',
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