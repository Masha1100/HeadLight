let gulp        = require('gulp'),
    browserSync = require('browser-sync');

let html    = require('./_html'),
    style       = require('./_style'),
    script      = require('./_script'),
    assets      = require('./_assets'),
    static      = require('./_static');
    clean       = require('./_clean');

module.exports = gulp.series(clean, gulp.parallel(html, style, script, assets, static));
