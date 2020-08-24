'use strict';

const { src, dest, watch, series, parallel } = require('gulp');
const stylus = require('gulp-stylus');
const browserSync = require('browser-sync').create();

let paths = {
    styles: {
        src: "src/stylus/**/*.styl",
        dest: "static/css"
    },

    html: {
        src: "**/*html",
        dest: "./public"
    },

    js: {
        src: "***/**/*js"
    },

    public: {
        url: "./public"
    }
}

function sync(done) {
    browserSync.init({
        server: {
            baseDir: "./public"
        }
    });
    done();
}

function stylusCompile() {
    return (
        src(paths.styles.src)
        .pipe(stylus({
            compress: true
        }))
        .pipe(dest(paths.styles.dest))
        .pipe(browserSync.stream())
    )
}

function watchHtml() {
    watch(paths.html.src).on('change', browserSync.reload);
}

function watchstylus() {
    watch(paths.styles.src, stylusCompile)
}

exports.default = parallel(sync, watchstylus, watchHtml);