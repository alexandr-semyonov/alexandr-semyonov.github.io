var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var csso        = require('gulp-csso');

// Static Server + watching scss/html files


// Compile sass into CSS & auto-inject into browsers
gulp.task('style', function(){
    return gulp.src('sass/style.sass')
        .pipe(sass())
        .pipe(csso())
        .pipe(gulp.dest('css'))
})