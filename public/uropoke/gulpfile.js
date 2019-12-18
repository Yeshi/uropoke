var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var plumber = require('gulp-plumber');

gulp.task("compileCss", function() {
  return gulp.src("./*.scss")
  .pipe(plumber())
  .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
  .pipe(autoprefixer(['last 2 versions']))
  .pipe(gulp.dest("./dest"))
});

// CSSファイルの変更を検知してcompileCssを実行
gulp.task("watch", function () {
  gulp.watch("./*.scss", ["compileCss"]);
});

// 実行時にはcompileCssしてwatch
gulp.task("default", ["compileCss", "watch"]);