const path = require('path')
const { defineConfig } = require('@vue/cli-service')

const resolve = (dir) => {
  return path.join(__dirname, dir)
}
module.exports = defineConfig({
  chainWebpack: (config) => {
    config.resolve.alias.set('~', resolve('src'))
  },
  transpileDependencies: true,
})
