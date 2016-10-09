var gulp = require('gulp');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');

gulp.task('js', function() {
    gulp.src('app/js/eqidian.layer.js')
        .pipe(uglify('eqidian.layer.min.js'))
        .pipe(gulp.dest('dist/js'));
})

gulp.task('css', function() {
    gulp.src('app/css/*.css')
        .pipe(minifyCss())
        .pipe(gulp.dest('dist/css'));
})

gulp.task('html', function() {
    gulp.src('app/index.html')
        .pipe(gulp.dest('dist'));
})

gulp.task('dist', ['js', 'css', 'html']);
