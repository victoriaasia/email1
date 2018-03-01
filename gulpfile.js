'use strict';
const gulp = require('gulp'),
      mjml = require('gulp-mjml'),
      mjmlEngine = require('mjml'),
      minify = require('gulp-minifier'),
      browserSync = require('browser-sync').create();;

gulp.task('html', function () {
  return gulp.src('src/*.mjml')
    .pipe(mjml(mjmlEngine, {minify: true}))
    .pipe(gulp.dest('dest'))
});

gulp.task('dev:watch',function(){
    gulp.watch('src/*.*');
});
