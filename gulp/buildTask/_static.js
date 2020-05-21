let gulp          = require('gulp');

module.exports = function static(){
    return gulp.src('./app/assets/static/*.*')
        .pipe(gulp.dest('./build'))
};