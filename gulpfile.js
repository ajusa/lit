var gulp = require('gulp');

gulp.task('default', css);

function css(done) {
    var postcss = require('gulp-postcss');
    var cleanCSS = require('gulp-clean-css');
    var cssvariables = require('postcss-css-variables');
    var gzip = require('gulp-gzip');
    return gulp.src('src/*.css')
        .pipe(postcss([cssvariables()]))
        .pipe(cleanCSS({ level: 2 }))
        .pipe(gulp.dest('dist/'))
        .pipe(gzip({ extension: 'zip' }))
        .pipe(gulp.dest('dist/'));
    done();
}