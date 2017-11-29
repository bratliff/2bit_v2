'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create(),
    reload = browserSync.reload;

gulp.task('serve', function () {

    browserSync.init({
        server: "./dist",
        port: 8080
      });

       gulp.watch("./src/*.html").on("change", reload);
       gulp.watch("./src/**/*.scss").on("change", reload);
   });

var filesToMove = [
        './src/**/*.html',
        './src/js/*.js',
        './src/js/vendor/**/*.js',
        './src/js/vendor/**/*.css'
    ];

gulp.task('sass', function () {

  return gulp.src('./src/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css/'));
});

gulp.task('watch', function () {

    //watch SASS
    gulp.watch('./src/scss/*.scss', ['sass']);

    //watch HTML
    gulp.watch('./src/**/*.html', ['move']);

    //watch JS
    gulp.watch('./src/js/*.js', ['move']);
});

gulp.task('move', function(){
  gulp.src(filesToMove, { base: './src' })
  .pipe(gulp.dest('dist'));
});

gulp.task('default', ['sass', 'move', 'watch', 'serve']);
