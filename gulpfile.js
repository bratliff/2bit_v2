'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

var filesToMove = [
        './src/**/*.html'
    ];

gulp.task('sass', function () {

  return gulp.src('./src/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css/'));
});

gulp.task('watch', function () {
  gulp.watch('./src/scss/**/*.scss', ['sass']);
});

gulp.task('move', function(){
  gulp.src(filesToMove, { base: './src' })
  .pipe(gulp.dest('dist'));
});

gulp.task('default', ['sass', 'move']);
