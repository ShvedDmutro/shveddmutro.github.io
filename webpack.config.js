const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const validate = require('webpack-validator');
const PATHS = require('./configs/Paths');
const parts = require('./configs/parts');
const pkg = require('./package.json');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let config,
    npmCommand = process.env.npm_lifecycle_event;

let entryPoints = {};

PATHS.entryPoints.forEach(function (entryPoint) {
    entryPoints[entryPoint.title] = [path.resolve(PATHS.src + PATHS.js + entryPoint.folder)];
});


const common = {
    // Entry accepts a path or an object of entries.
    // We'll be using the latter form given it's
    // convenient with more complex configurations.
    entry: entryPoints,
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: PATHS.src + '/index.html'
        })
    ]
};

switch (npmCommand) {
    case 'build':
        config = merge(
            common,
            {
                devtool: 'source-map',
                output: {
                    path: PATHS.dist,
                    filename: '.' + PATHS.js + '/[name].[chunkhash].js',
                    // This is used for require.ensure. The setup
                    // will work without but this is useful to set.
                    chunkFilename: '[chunkhash].js'
                }
            },
            parts.clean(PATHS.dist),
            parts.setFreeVariable(
                'process.env.NODE_ENV',
                'production'
            ),
            parts.extractBundle({
                name: 'vendor',
                entries: Object.keys(pkg.dependencies) //['react', 'react-dom']
            }),
            parts.fonts([PATHS.fonts]),
            parts.extractCSS(PATHS.css),
            parts.purifyCSS([PATHS.src]),
            parts.babel([PATHS.src]),
            parts.minify()
        );
        break;

    default:
        config = merge(
            common,
            {
                devtool: 'eval-source-map',
                debug: true,
            },
            parts.setupLess(PATHS.less),
            parts.devServer({
                host: PATHS.host,
                port: PATHS.port
            }),
            parts.babelHot([PATHS.src]),
            parts.fonts([PATHS.fonts]),
            parts.json(),
            parts.openBrowser(PATHS.projectUrl)
            // Testing configs for js and less linting. Uncomment it if you want to have runs every time when do changes
            // parts.testLint({
            //     paths: [PATHS.src],
            //     conf: PATHS.eslint
            // }),
            // parts.testStyles({
            //     path: PATHS.src,
            //     conf: PATHS.stylelint
            // })
        );
        break;

}

module.exports = validate(config, {
    quiet: true
});

