let gulp        = require( 'gulp' ),
    browserSync = require( 'browser-sync' );

let html        = require( './_html' ),
    style       = require( './_style' ),
    script      = require( './_script' ),
    assets      = require( './_assets' ),
    static      = require( './_static' );
    clean       = require( './_clean' ),
    build       = require( './_build' );

function watch(){
    gulp.watch('./app/sass/**/*.sass', style);
    gulp.watch('./app/html/**/*.html', html);
    gulp.watch('./app/js/*.js', script);
    gulp.watch('./app/assets/**/*.*', gulp.parallel(assets, static));
}
function sync(){
    browserSync.init({
        server: {
            baseDir: "dev/"
        }
    });
}

module.exports = gulp.series(clean, build, gulp.parallel(sync, watch));
