/**
 * Created by last-g on 16.07.15.
 */


var gulp = require('gulp');
var bower = require('gulp-bower');
var mainBowerFiles = require('gulp-main-bower-files');
var server = require('gulp-express');

gulp.task('bower-install', function() {

    return bower({cmd: 'update'});
});

gulp.task('bower-compile', ['bower-install'], function() {
    bower();
    return gulp.src('./bower.json')
        .pipe(mainBowerFiles())
        .pipe(gulp.dest('./public/libs'))
});


gulp.task('server', ['bower-compile'], function () {
    // Start the server at the beginning of the task
    server.run(['bin/www']);
});

gulp.task('direct-server', ['bower-compile'], function() {
    app = require('./bin/www');
});


gulp.task('default', ['server'], function() {

});