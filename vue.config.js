const webpack = require("webpack");

module.exports = {
    runtimeCompiler: true,
    // outputDir: 'public',
    // publicPath: '',
    lintOnSave: false,
    chainWebpack: config => {
        config.optimization.delete('splitChunks');
    },
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery',
                Popper: ['popper.js', 'default']
            })
        ]
    },
    pages: {
        about: {
            entry: 'src/js/about-us/app.js',
            template: 'src/js/about-us/views/index.html',
            filename: 'about.html',
            assetsDir: 'src/js/about-us/assets',
            publicPath: 'src/js/about-us/assets'
        },

    }
  }
