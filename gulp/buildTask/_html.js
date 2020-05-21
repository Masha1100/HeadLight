let gulp          = require( 'gulp' ),
    fileinclude   = require('gulp-file-include'),
    browserSync   = require( 'browser-sync' ),
    notify        = require( 'gulp-notify' ),
    plumber       = require( 'gulp-plumber' );

module.exports = function html(){
    return gulp.src('./app/html/**/*.html')
        .pipe(plumber({
            errorHandler: notify.onError( function( err ) {
                return {
                title: 'html',
                message: err
                };
            })
        }))
        .pipe(fileinclude({
                prefix: '@@',
                basepath: '@file'
            }))
        .pipe(gulp.dest('./build'))
        .pipe(browserSync.stream());
}