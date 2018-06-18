import functions from './functions'

const config = function () {
  const configurations = {
    functions,
  }

  if (process.env.NODE_ENV === 'development') {
    Object.assign(configurations, require('../mock/devConfig'))
  }

  return configurations
}

export default config()
