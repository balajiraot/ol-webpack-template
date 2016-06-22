module.exports = {
    entry: "./public/ui/entry.js",
    output: {
        path: __dirname + '/public/scripts/',
        filename: "bundle.js",
        libraryTarget: 'umd'
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};