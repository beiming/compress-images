const CopyPlugin = require('copy-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');

const plugins = [
    new CopyPlugin([{
        from: 'src/images/*',
        to: 'images/by_webpack/[name]-[hash:8].[ext]',
        force: true
    }]),
    new ImageminPlugin({
        disable: false,
        test: /\.(jpe?g|png)$/i,
        jpegtran: null,
        pngquant: null,
        plugins: [
            imageminMozjpeg({
                quality: 70,
                progressive: true
            }),
            imageminPngquant({quality: [0.7, 0.75]}),
        ]
    })
];


module.exports = {
    mode: 'production',
    plugins: plugins,
};
