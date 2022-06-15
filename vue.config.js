const path = require('path');

//const deployPath = '/D:/vue/market_online1/public/';
const deployPath = 'D:\\Web_study\\shoping_online\\public';
const isPord = process.env.MODE_ENV == 'production';
// vue.config.js

module.exports = {
   
  css: {
      loaderOptions: {
          sass: {
              additionalData: '@import "./public/scss/main.scss";'
          }
      }
  },
  configureWebpack: {
  resolve: {
          alias: {
              '@public': path.resolve(__dirname, 'public'),
              '@scss': path.resolve(__dirname, 'public/scss'),
              '@css': path.resolve(__dirname, 'public/css'),
              '@coms': path.resolve(__dirname, 'src/components'),
              '@views': path.resolve(__dirname, 'src/views'),
          }
      }
  },
  
  publicPath: isPord ? '/generated/project' :'/',
  outputDir: `${deployPath}/generated/project`,
}