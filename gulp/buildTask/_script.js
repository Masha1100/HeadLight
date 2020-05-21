let gulp          = require('gulp'),
    concat        = require('gulp-concat');

module.exports = function script(){
    return gulp.src('./app/js/*.js')
        .pipe(concat('common.js'))
        .pipe(gulp.dest('./build/js'))
}