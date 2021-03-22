module.exports = {
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].title = 'Raketklubben'
      return args
    })
  },
  pwa: {
    manifestOptions: {
      background_color: '#157a6e',
    },
    name: 'Raketklubben',
    themeColor: '#C86176',
    workboxOptions: {
      runtimeCaching: [
        {
          handler: 'NetworkFirst',
          options: {
            networkTimeoutSeconds: 5
          },
          urlPattern: "https://random-data-api.com/api/name/random_name?size=10"
        }]
    }
  },
}