module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "@/assets/settings.scss";`,
      }
    }
  }
};
