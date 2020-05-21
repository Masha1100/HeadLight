let gulp          = require('gulp');

module.exports = function assets(){
    return gulp.src([
        './app/assets/**/*.*',
        '!./src/assets/static'
    ])
    .pipe(gulp.dest('./build/'));
};