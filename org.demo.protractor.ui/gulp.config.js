module.exports = function () {
    var root = '';
    var app = root + 'app/';
    var test = root + 'test/';
    var page = test + 'page/';
    var e2e = test + 'e2e/';
    var assets = root + 'assets/';
    var assetsPath = {
        styles: assets + 'styles/',
        images: assets + 'images/',
        fonts: assets + 'fonts/'
    };
    var index = root + 'index.html';
    var tsFiles = [
        app + '**/!(*.spec)+(.ts)'
    ];
    var tsTestFiles = {
        unit: [app + '**/*.spec.ts'],
        e2e: [e2e + '**/*.ts'],
        page: [page + '**/*.ts']
    };
    var build = {
        path: 'build/',
        app: 'build/app/',
        fonts: 'build/fonts',
        assetPath: 'build/assets/',
        assets: {
            lib: {
                js: 'lib.js',
                css: 'lib.css'
            }
        }
    };
    var report = {
        path: 'report/'
    };
    var screenshotReport = {
        path: 'report/screenshot'
    };
    var liveServer = {
        dev: {
            port: 3000,
            host: "127.0.0.1",
            open: '/',
            file: "index.html",
            wait: 1000,
            logLevel: 0
        },
        prod: {
            port: 3001,
            host: "127.0.0.1",
            root: 'build/',
            file: "index.html",
            wait: 1000,
            logLevel: 0
        }
    };

    var e2eConfig = {
        seleniumTarget: 'http://127.0.0.1:3000'
    };

    var systemJs = {
        main: {
            baseUrl: '.',
            paths: {
                'n:*': 'node_modules/*'
            },
            map: {
            },
            packages: {
                'app': {
                    format: 'register',
                    defaultExtension: 'js'
                }
            }
        },
        builder: {
            normalize: true,
            minify: true,
            // TODO: remove this when angular2 bug is solved
            mangle: false,
            // TODO
            globalDefs: { DEBUG: false }
        }
    };

    var config = {
        root: root,
        app: app,
        test: test,
        page: page,
        e2e: e2e,
        e2eConfig: e2eConfig,
        assets: assets,
        index: index,
        build: build,
        report: report,
        screenshotReport: screenshotReport,
        assetsPath: assetsPath,
        tsFiles: tsFiles,
        tsTestFiles: tsTestFiles,
        liveServer: liveServer,
        systemJs: systemJs
    };

    return config;
};
