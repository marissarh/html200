const {
    src,
    dest,
    series,
    watch,
} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const prefix = require('gulp-autoprefixer');
const minify = require('gulp-clean-css');
const rename = require('gulp-rename');


function compilescss(){
    return src('./src/scss/**/*.scss')
    .pipe(sass())
    .pipe(prefix())
    .pipe(minify())
    .pipe(rename(function(path) {
        return{
            dirname: path.dirname + "",
            basename: path.basename + ".min",
            extname: ".css"
        };
    }))
    .pipe(dest('.dist.css'))
};



// Watch for changes in scss, html, and js files, reloading page in browser when change is found.
function watchTask(){
    watch('.src/scss/**/*scss', compilescss);
}

exports.default = series(
    compilescss,
    watchTask

)