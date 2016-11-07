var gulp = require('gulp')
var yaml = require('js-yaml')
var fs = require('fs')
var sass = require('gulp-sass')
var rename = require('gulp-rename')
var yaml = require('gulp-yaml')
var babel = require('gulp-babel')

gulp.task('wxml', function () {
  gulp.src('./app/**/*.html')
  .pipe(rename(function (path) {
    path.extname = '.wxml'
  }))
  .pipe(gulp.dest('build/'))
})

gulp.task('sass', function () {
  gulp.src('./app/**/*.scss')
  .pipe(sass({outputStyle: 'expanded'}))
  .pipe(rename(function (path) {
    path.extname = '.wxss'
  }))
  .pipe(gulp.dest('build'))
})

gulp.task('yml', function () {
  gulp.src('./app/**/*.yml')
  .pipe(yaml({ space: 2 }))
  .pipe(gulp.dest('build'))
})

gulp.task('js', function () {
  gulp.src('./app/**/*.js')
  .pipe(babel({
    presets: ['es2015']
  }))
  .pipe(gulp.dest('build'))
})

gulp.task('default', ['wxml', 'sass', 'yml', 'js'], function () {
  gulp.watch(['./app/**/*.wxml', './app/**/*.scss', './app/**/*.yml', './app/**/*.js'], ['wxml', 'sass', 'yml', 'js'])
})
