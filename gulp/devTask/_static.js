let gulp          = require( 'gulp' );

module.exports = function staticDev(){
    return gulp.src('./app/assets/static/*.*')
        .pipe(gulp.dest('./dev'))
};