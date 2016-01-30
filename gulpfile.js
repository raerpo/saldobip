var gulp = require('gulp');
var sass = require('gulp-sass');
var nodemon = require('gulp-nodemon');

gulp.task('sass', function(){
  gulp.src('./public/scss/*.scss')
  .pipe(sass())
  .pipe(gulp.dest('./public/css'));
});

gulp.task('start', function(){
  nodemon({
    script: 'index.js'
  });
});

gulp.task('default',['sass', 'start'] ,function(){

});
