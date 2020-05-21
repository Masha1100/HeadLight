let gulp        = require( 'gulp' ),
    html        = require( './_html' ),
    style       = require( './_style' ),
    script      = require( './_script' ),
    assets      = require( './_assets' ),
    static      = require( './_static' );

module.exports = gulp.parallel(html, style, script, assets, static);

