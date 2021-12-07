const { task, src, watch, dest } = require("gulp");
const autoprefixer = require("gulp-autoprefixer");
const sass = require("gulp-sass");

sass.compiler = require("node-sass");

function scss() {
  return src("src/scss/**/*.scss")
    .pipe(sass.sync().on("error", sass.logError))
    .pipe(autoprefixer())
    .pipe(dest("dist/css"));
}

task("watch", () => {
  watch("src/scss/**/*.scss", scss);
});

// function cssPrefix() {
//   return src("src/scss/**/*.css").pipe(autoprefixer()).pipe(dest("dist/css"));
// }

// task("css-prefix", cssPrefix);

// task("watch", () => {
//   watch("src/scss/**/*.css", cssPrefix);
// });
