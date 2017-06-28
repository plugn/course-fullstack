var path = require('path');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');


module.exports = {
	entry: './src/app.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'public')
	},
	devtool: 'cheap-module-eval-source-map',
	// devtool: 'cheap-source-map',
	watch: true,
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015', 'stage-1']
				}
			}
		]
	},
	// Optional: Enables reading mapbox token from environment variable
	plugins: [
		new ProgressBarPlugin(),
		new Dotenv({
			path: './.env', // default
			safe: false
		})
		// new webpack.EnvironmentPlugin(['MapboxAccessToken'])
	]

};