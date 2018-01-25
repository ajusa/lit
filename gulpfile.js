var gulp = require('gulp');

gulp.task('default', css);

function css(done) {
    var postcss = require('gulp-postcss');
    var cleanCSS = require('gulp-clean-css');
    var cssvariables = require('postcss-css-variables');
    var zopfli= require('gulp-zopfli');
    return gulp.src('src/*.css')
        .pipe(postcss([cssvariables()]))
        .pipe(cleanCSS({ level: 2 }))
        .pipe(gulp.dest('dist/'))
        .pipe(zopfli())
        .pipe(gulp.dest('dist/'));
    done();
}
gulp.task('minify', minify);

function minify(done) {
    var postcss = require('gulp-postcss');
    var cleanCSS = require('gulp-clean-css');
    var cssvariables = require('postcss-css-variables');
    return gulp.src('src/*.css')
        .pipe(postcss([cssvariables()]))
        .pipe(cleanCSS({ level: 2 }))
        .pipe(gulp.dest('dist/'))
    done();
}
gulp.task('watch', function(){
    gulp.series('minify')
    gulp.watch("src/*.css").on('change', gulp.series('minify'));
})