const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const watch = require('gulp-watch');
const concatCss = require('gulp-concat-css');

const SRC_DIR = './src';
const DIST_DIR = './dist';
const CSS_PATTERN = `${SRC_DIR}/scss/**/*.scss`;
const HTML_PATTERN = `${SRC_DIR}/html/**/*.html`;
const IMG_PATTERN = `${SRC_DIR}/img/**/*.*`;
const JS_PATTERN = `${SRC_DIR}/js/**/*.js`;


gulp.task('watch-sass', function() {
    gulp.src(CSS_PATTERN)
        .pipe(sass().on('error', sass.logError))
        .pipe(concatCss('style.css'))
        .pipe(gulp.dest(`${DIST_DIR}/css`))
    return watch(CSS_PATTERN, function() {
        gulp.src(CSS_PATTERN)
            .pipe(sass().on('error', sass.logError))
            .pipe(concatCss('style.css'))
            .pipe(gulp.dest(`${DIST_DIR}/css`))
    });
});
gulp.task('watch-html', function() {
    gulp.src(HTML_PATTERN)
        .pipe(gulp.dest(`${DIST_DIR}`))
    return watch(HTML_PATTERN, function() {
        gulp.src(HTML_PATTERN)
            .pipe(gulp.dest(`${DIST_DIR}`))
    });
});
gulp.task('watch-img', function() {
    gulp.src(IMG_PATTERN)
        .pipe(gulp.dest(`${DIST_DIR}/img`));
    return watch(IMG_PATTERN, function() {
        gulp.src(IMG_PATTERN)
            .pipe(gulp.dest(`${DIST_DIR}/img`));
    });
});
gulp.task('watch-js', function() {
    gulp.src(JS_PATTERN)
        .pipe(gulp.dest(`${DIST_DIR}/js`));
    return watch(JS_PATTERN, function() {
        gulp.src(JS_PATTERN)
            .pipe(gulp.dest(`${DIST_DIR}/js`));
    });
});


gulp.task('watch', 
    gulp.parallel('watch-html', 'watch-js', 'watch-img', 'watch-sass')
)
