'use strict';

var gulp       = require('gulp'),
    watch      = require('gulp-watch'),
    prefixer   = require('gulp-autoprefixer'),
    sass       = require('gulp-sass'),
    ts         = require('gulp-typescript'),
    sourcemaps = require('gulp-sourcemaps'),
    cssmin     = require('gulp-minify-css');

var paths = {
    styles: {
        app : 'app/**/*.scss',
        main: 'assets/app.scss'
    },
    ts    : 'app/**/*.ts'
};

gulp.task('watch', function () {
    watch([paths.styles.app], function (event, cb) {
        gulp.start('style:build');
    });

    watch([paths.styles.main], function (event, cb) {
        gulp.start('app:style:build');
    });

    watch([paths.ts], function (event, cb) {
        gulp.start('ts:build');
    });
});

gulp.task('style:build', function () {
    gulp.src(paths.styles.app, {base: "./"})
        .pipe(sass())
        .pipe(prefixer())
        .pipe(cssmin())
        .pipe(gulp.dest('.'));
});

gulp.task('app:style:build', function () {
    gulp.src(paths.styles.main, {base: "./"})
        .pipe(sass())
        .pipe(prefixer())
        .pipe(cssmin())
        .pipe(gulp.dest('.'));
});

gulp.task('ts:build', function () {

    var tsProject = ts.createProject('./tsconfig.json');

    gulp.src(paths.ts)
        .pipe(sourcemaps.init())
        .pipe(ts(tsProject))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('app/'));
});

gulp.task('default', ['watch']);