gulp = require 'gulp'
uglify = require 'gulp-uglify'
coffee = require 'gulp-coffee'
rename = require 'gulp-rename'
wrap = require 'gulp-wrap-umd'

deps = [
  name: 'handlebars'
  globalName: 'Handlebars'
  paramName: 'Handlebars'
,
  name: 'underscore.string'
  globalName: '_s'
  paramName: '_s'
]

gulp.task 'default', () ->
  gulp.src './src/underscore.string.coffee'
  .pipe coffee bare: true, expand: true, flatten: true
  .pipe wrap namespace: 'HandlebarsHelpers.UnderscoreString', exports: 'Handlebars', deps: deps
  .pipe rename 'handlebars-helpers-underscore.string.js'
  .pipe gulp.dest './dist/'
  .pipe uglify()
  .pipe rename extname: '.min.js'
  .pipe gulp.dest './dist/'
