var env = process.env.NODE_ENV || 'development';

var config = {
  'development': {
    api_url: 'http://localhost:3000/',
  },
  'production': {
    api_url: 'http://localhost:3000/',
  }
}

module.exports = config[env]