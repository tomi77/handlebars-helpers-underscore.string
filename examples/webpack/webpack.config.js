module.exports = {
    entry: './index.js',
    output: {
        filename: 'index.bundle.js'
    },
	node: {
		fs: 'empty'
	},
    resolve: {
        alias: {
            handlebars: 'handlebars/dist/handlebars.js'
        }
    }
};
