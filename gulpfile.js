	
// package.json baglantilari
// yeni mesaj
// yeni mesaj 2
// yeni mesaj 3
 "dependencies": {
    "gulp-autoprefixer": "^7.0.1",
    "gulp-clean-css": "^4.3.0",
    "gulp-concat": "^2.6.1",
    "gulp-imagemin": "^7.1.0",
    "gulp-sass": "^4.1.0",
    "gulp-uglify": "^3.0.2",
    "gulp-watch": "^5.0.1",
    "gulp4-run-sequence": "^1.0.1",
  }


 
//gulpfile.js js kodu
const gulp = require('gulp'); 
const sass = require('gulp-sass'); 
const jsMinify = require('gulp-uglify');
const runSequence = require('gulp4-run-sequence');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');


gulp.task('jsMinify', ()=>{
  return gulp.src('scripts/**/*.js')
        .pipe(concat("min.script.js"))
        .pipe(jsMinify())
        .pipe(gulp.dest('dist/scripts'));
});


gulp.task('sass',()=>{
     return gulp.src('sass/**/*.scss')
            .pipe(sass())
            .pipe(autoprefixer())
            .pipe(concat('min.style.css'))
            .pipe(cleanCSS())
            .pipe(gulp.dest('dist/styles'));
});


gulp.task('img',()=>{
  return gulp.src('images/*')
         .pipe(imagemin())
         .pipe(gulp.dest('dist/images'));
})



gulp.task('delete',()=>del(['dist/scripts/**/*.js','dist/styles/**/*.css','dist/*.html']))

  
gulp.task('watch', function() {
  gulp.watch('./sass/**/*.scss',gulp.series('sass'));
  gulp.watch('./scripts/**/*.js',gulp.series('jsMinify'));
  gulp.watch("./*.html", gulp.series('html'));
  
});

 
gulp.task('default',()=>{
     runSequence(
          'img',
          'sass',
          'jsMinify',
          'watch'
     );
})
 
 



 