gulp = require("gulp"),
gutil = require("gulp-util")
concat = require("gulp-concat"),
uglify = require("gulp-uglify"),
cssNano = require("gulp-cssnano")

gulp.task("js",async()=>{
    return gulp.src([
        "src/js/script.js"
        ])
        .pipe(concat("index.js"))
        .pipe(uglify())
        .pipe(gulp.dest("src/opt/"))
})

gulp.task("css",async()=>{
    return gulp.src([
        "src/css/styles.css"
    ])
        .pipe(concat("index.css"))
        .pipe(cssNano())
        .pipe(gulp.dest("src/opt/"))
})

gulp.task("build",gulp.parallel("js","css"))
