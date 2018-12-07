var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var csso        = require('gulp-csso');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var notify = require('gulp-notify');

// Static Server + watching scss/html files


// Compile sass into CSS & auto-inject into browsers
gulp.task('style', function(){
    return gulp.src('sass/style.sass')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 3 versions'],
            cascade: false
        }))
        .on("error", notify.onError({
            message: "Error: <%= error.message %>",
            title: "Error in style task"
          }))
        .pipe(csso())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('css'))
        .pipe(browserSync.stream());
})

gulp.task('serve', ['style'], function() {

    browserSync.init({
        server: "./app"
    });

    gulp.watch('sass/**/*.sass', ['style'])
    gulp.watch("./*.html").on('change', browserSync.reload);
});

gulp.task('default', ['watch'])