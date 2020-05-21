let gulp          = require('gulp'),
    sass          = require('gulp-sass'),
    autoprefixer  = require('gulp-autoprefixer'),
    cleanCSS      = require('gulp-clean-css'),
    gcmq          = require('gulp-group-css-media-queries'),
    rename        = require('gulp-rename'),
    Fiber         = require('fibers');

sass.compiler = require('node-sass');

module.exports = function style(){
    return gulp.src('./app/sass/main.sass')
        .pipe(sass({
            fiber: Fiber,
            outputStyle: 'expanded',
        }))
        .pipe(gcmq())
        .pipe(autoprefixer(['last 1 versions']))
        .pipe(gulp.dest('./build/css'))
        .pipe(cleanCSS({
            level: 2,
            debug: true,
            compatibility: '*'
            }, details => {
                console.log(`${details.name}: Original size:${details.stats.originalSize} - Minified size: ${details.stats.minifiedSize}`)
            }
        ))
        .pipe(rename({suffix: '.min', prefix : ''}))
        .pipe(gulp.dest('./build/css'))

}