'use strict'

const endpointEnv = process.env.ENDPOINT_ENV || 'localhost'
console.log(endpointEnv)

const ENV = {
  STAGE: 'dev',
  BASE_URL: '',
  ENDPOINT_ENV: endpointEnv,
  NODE_ENV: process.env.NODE_ENV || ''
}

if (endpointEnv === 'api_gw') {
  ENV.BASE_URL = `/${ENV.STAGE}/`
}

console.log(ENV.BASE_URL)

// for serverless.yml
const exporter = () => {
  return ENV
}

module.exports = {
  ENV,
  exporter
}
