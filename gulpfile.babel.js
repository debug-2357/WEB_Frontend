import gulp from 'gulp';
const sass = require('gulp-sass')(require('sass'));
import minify from 'gulp-csso';

sass.compiler = require('node-sass');

const routes = {
  scss: {
    watch: './public/scss/*',
    src: './public/scss/*.scss',
    dest: './public/css',
  },
};

const styles = () => {
  return gulp.src(routes.scss.src).pipe(sass().on('error', sass.logError)).pipe(minify()).pipe(gulp.dest(routes.scss.dest));
};

const watch = () => {
  return gulp.watch(routes.scss.watch, styles);
};

export const dev = gulp.series([watch]);
