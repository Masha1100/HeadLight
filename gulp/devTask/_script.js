let gulp          = require( 'gulp' ),
    browserSync   = require( 'browser-sync' ),
    plumber       = require( 'gulp-plumber' ),
    concat        = require( 'gulp-concat' );

module.exports = function scriptDev(){
    return gulp.src('./app/js/*.js')
        .pipe(plumber())
        .pipe(concat('common.js'))
        .pipe(gulp.dest('./dev/js'))
        .pipe(browserSync.stream());
}