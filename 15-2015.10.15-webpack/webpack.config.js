/**
 * Created by Jackey Li on 2015/10/15.
 */
var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
var path = require('path');

module.exports = {
    entry: {
        entry: './app.js'
    },
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['react-hot', 'babel'],
            include: path.join(__dirname, 'scripts')
        }]
    },
    plugins: [commonsPlugin]
    //plugins: [
    //    new webpack.HotModuleReplacementPlugin(),
    //    new webpack.NoErrorsPlugin()
    //]
};