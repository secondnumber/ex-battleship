const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', function() {
  gulp
    .src('source/sass/style.scss')
    .pipe(sass())
    .pipe(gulp.dest('css'));
  done();
});

gulp.task('watch', function() {
  gulp.watch('source/**/*.scss', gulp.parallel('sass'));
});
