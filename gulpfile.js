'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const uglify   = require('gulp-uglify');
const concat   = require('gulp-concat');
const htmlmin = require('gulp-htmlmin');

gulp.task('css_src', gulp.series(async function () {
    return gulp.src('./src/css/**/*.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest('./src/css/'));
}));

gulp.task('css_dist', gulp.series(async function () {
    return gulp.src('./src/css/**/*.scss')
        .pipe(sass.sync({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(cleanCSS())
        .pipe(gulp.dest('./dist/css/'));
}));

gulp.task('js', gulp.series(async function () {
    return gulp.src('./src/js/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js/'));
}));

gulp.task('html', gulp.series(async function () {
    return gulp.src('./src/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('./dist'));
}));


gulp.task('fonts', function () {
    return gulp.src('./src/assets/fonts/*.ttf')
      .pipe(gulp.dest('./dist/assets/fonts/'));
});


gulp.task('images', function () {
    return gulp.src(['./src/assets/images/*.png','./src/assets/images/*.jpg', 
                    './src/assets/images/*.JPG'])
      .pipe(gulp.dest('./dist/assets/images/'));
});

gulp.task('watch', function () {
    gulp.watch('./src/css/**/*.scss', gulp.series('css_src'));
    gulp.watch('./src/css/**/*.scss', gulp.series('css_dist'));
    gulp.watch('./src/js/**/*.js', gulp.series('js'));
    gulp.watch('./src/*.html', gulp.series('html'));
});

gulp.task('default', gulp.series('css_src', 'css_dist', 'js', 'html', 'fonts', 'images', 'watch'));