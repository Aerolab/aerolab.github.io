var gulp = require('gulp')
, fs = require('fs')
, uglify = require("gulp-uglify")
, concat = require("gulp-concat")
, header = require("gulp-header");

gulp.task('build', function () {
    gulp.src([
        './js/modernizr.min.js',
        './js/jquery.min.js',
        './js/fastclick.js',
        './js/headroom.js',
        './js/midnight.jquery.min.js',
        './js/smoothscroll.js',
        './js/wow.min.js',

        './js/site.js'
    ])
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest('./js/'))
    .pipe(uglify({preserveComments:false, mangle:true, compress:true}))
    .pipe(concat('scripts.min.js'))
    .pipe(gulp.dest('./js/'));

});

gulp.task('default', ['build']);
