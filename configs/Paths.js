const path = require('path');

const PATHS = {
    root: process.env.PWD,
    js: '/js',
    css: '/css',
    fonts: '/fonts',
    img: '/img',
    eslint: './.eslintrc',
    stylelint: '.stylelintrc',
    tests: '/tests',
    src: '/app',
    dist: '/build',
    hotUrl: '//localhost:8080/',
    localIp: '127.0.0.1',
    port: 8080,
    host: 'localhost',
    //testsPort: process.env.WEBPACK_TESTS_PORT,
    projectUrl: 'http://localhost:8080/',
    entryPoints: [
        {
            title: 'app',
            folder: '/'
        }
    ]
};

PATHS.src =  path.join(PATHS.root, PATHS.src);
PATHS.dist = path.join(PATHS.root, PATHS.dist);
PATHS.less = path.join(PATHS.src, '/less');

module.exports = PATHS;
