
var browserSync = require('browser-sync').create(),
    gulp = require('gulp'),
    rename  = require('gulp-rename'),
    imagemin = require('gulp-imagemin');

const sass = require('gulp-sass')(require('sass'));


// Static Server + watching scss/html files
gulp.task('serve', gulp.series(function() {

    browserSync.init({
        port: 80,
        server: "./dist/",
        ghostMode: false,
        notify: false
    });

    gulp.watch('**/*.html').on('change', browserSync.reload);
    gulp.watch('js/**/*.js').on('change', browserSync.reload);
    
}));

//Sass Complier 
gulp.task('sass', function() {
    return gulp.src('./sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
  });

//Minified Sass Complier 
gulp.task('min-sass', function() {
    return gulp.src('./sass/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./dist/css'));
  });

// Images Task
gulp.task('images', function() {
    return gulp.src('img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'));
});

// Watch 
gulp.task('watch', function() {
    // Watch SCSS 
    gulp.watch('sass/*.scss', gulp.series('sass')).on('change', browserSync.reload);
    gulp.watch('sass/**/*.scss', gulp.series('sass')).on('change', browserSync.reload);
    gulp.watch('sass/*.scss', gulp.series('min-sass')).on('change', browserSync.reload);
    gulp.watch('sass/**/*.scss', gulp.series('min-sass')).on('change', browserSync.reload);
    // Watch Images
    gulp.watch('img/*', gulp.series('images'));
});

gulp.task('default', gulp.parallel('serve', 'sass', 'min-sass', 'images', 'watch'));