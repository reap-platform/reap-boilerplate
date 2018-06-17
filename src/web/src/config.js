const config = function () {
  // 应用配置
  const configurations = {
    // 配置功能码
    functions: [
      { code: 'REAPBO0001', description: '示例功能码' },
    ],
  }

  if (process.env.NODE_ENV === 'development') {
    Object.assign(configurations, require('../mock/devConfig'))
  }

  return configurations
}

export default config()
