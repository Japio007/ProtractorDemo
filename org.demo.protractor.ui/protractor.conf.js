var glob = require('glob');
var seleniumPath = './node_modules/gulp-protractor/node_modules/protractor/selenium/';
var seleniumJarPath = '';

glob(seleniumPath + '*.jar',
    function(err, files) {
        seleniumJarPath = files[0];
    });

exports.config = {
    seleniumServerJar: seleniumJarPath,
    capabilities: {
        'browserName': 'chrome'
    },
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 60000,
        realtimeFailure: true
    },
    onPrepare: function() {
        browser.get('/');
    }
};
