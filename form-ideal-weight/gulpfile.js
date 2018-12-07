var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var csso        = require('gulp-csso');
var autoprefixer = require('gulp-autoprefixer');

// Static Server + watching scss/html files


// Compile sass into CSS & auto-inject into browsers
gulp.task('style', function(){
    return gulp.src('sass/style.sass')
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 3 versions'],
            cascade: false
        }))
        .pipe(csso())
        .pipe(gulp.dest('css'))
})