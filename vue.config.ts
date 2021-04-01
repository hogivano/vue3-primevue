module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "~@/assets/styles/scss/variable.scss"
        `
      }
    }
  }
};
