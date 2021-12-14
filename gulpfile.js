const gulp = require("gulp");

/* sass */
const sass = require("gulp-dart-sass");
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const sassGlob = require("gulp-sass-glob");
const mmq = require("gulp-merge-media-queries");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssdeclsort = require("css-declaration-sorter");

/* browser-sync */
const browserSync = require("browser-sync");

/* select use compiler */
sass.compiler = require("sass"); // Dart Sass = "sass"

gulp.task("sass", function () {
    return gulp
        .src("./sass/**/*.scss")
        .pipe(plumber({ errorHandler: notify.onError("Error: <%= error.message %>") }))
        .pipe(sassGlob())
        .pipe(sass({ outputStyle: "expanded" }))
        .pipe(postcss([autoprefixer()]))
        .pipe(postcss([cssdeclsort({ order: "alphabetical" })]))
        .pipe(mmq())
        .pipe(gulp.dest("./css"));
});

gulp.task("watch", function (done) {
    gulp.watch("./sass/**/*.scss", gulp.task("sass"));
    gulp.watch("./sass/**/*.scss", gulp.task("bs-reload"));
    gulp.watch("./js/*.js", gulp.task("bs-reload"));
    gulp.watch("./*.html", gulp.task("bs-reload"));
});

gulp.task("browser-sync", function (done) {
    browserSync.init({
        server: {
            baseDir: "./",
            index: "index.html"
        }
    });
    done();
});

gulp.task("bs-reload", function (done) {
    browserSync.reload();
    done();
});

gulp.task("default", gulp.series(gulp.parallel("browser-sync", "sass", "watch")));