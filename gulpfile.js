/**
 * Created by last-g on 16.07.15.
 */


var gulp = require('gulp');
var bower = require('gulp-bower');
var mainBowerFiles = require('gulp-main-bower-files');

gulp.task('bower', function() {
    return gulp.src('./bower.json')
        .pipe(mainBowerFiles())
        .pipe(gulp.dest('./libs'))
});


gulp.task('default', ['bower'], function() {
    app = require('./bin/www');
});