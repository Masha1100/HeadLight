let gulp          = require( 'gulp' );

module.exports = function assetsDev(){
    return gulp.src([
        './app/assets/**/*.*',
        '!./app/assets/static'
    ])
    .pipe(gulp.dest('./dev/'));
};