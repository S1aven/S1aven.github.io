const { src, dest, task, series, watch, parallel } = require('gulp');
const rm = require('gulp-rm');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload
const sassGlob = require('gulp-sass-glob');
const autoprefixer = require('gulp-autoprefixer');
const px2rem = require('gulp-smile-px2rem');
const gcmq = require('gulp-group-css-media-queries');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const svgo = require('gulp-svgo');
const svgSprite = require('gulp-svg-sprite');
const gulpif = require('gulp-if');

const env = process.env.NODE_ENV;

const { DIST_PATH, SRC_PATH, STYLES_LIBS, JS_LIBS } = require('./src/gulp.config');
sass.compiler = require('node-sass');


task('clean', () => {
  return src(`${DIST_PATH}/**/*`, { read: false })
    .pipe(rm());
});

task('copy:html', () => {
  return src(`${SRC_PATH}/*.html`)
    .pipe(dest(DIST_PATH))
    .pipe(reload({ stream: true }));
});

task('styles', () => {
  return src([...STYLES_LIBS, `${SRC_PATH}/main.scss`])
    .pipe(gulpif(env === 'dev', sourcemaps.init()))
    .pipe(concat('main.min.scss'))
    .pipe(sassGlob())
    .pipe(sass().on('error', sass.logError))
    .pipe(px2rem())
    .pipe(gulpif(env === 'prod', autoprefixer({
      overrideBrowserslist: ['last 2 versions'],
      cascade: false
    })))
    .pipe(gulpif(env === 'prod', gcmq()))
    .pipe(gulpif(env === 'prod', cleanCSS()))
    .pipe(gulpif(env === 'dev', sourcemaps.write()))
    .pipe(dest(DIST_PATH))
    .pipe(reload({ stream: true }));
});

task('scripts', () => {
  return src([...JS_LIBS, `${SRC_PATH}/scripts/*.js`])
    .pipe(gulpif(env === 'dev', sourcemaps.init()))
    .pipe(concat('main.min.js', { newLine: ';' }))
    .pipe(gulpif(env === 'prod', babel({
      presets: ['@babel/env']
    })))
    .pipe(gulpif(env === 'prod', uglify()))
    .pipe(gulpif(env === 'dev', sourcemaps.write()))
    .pipe(dest(DIST_PATH))
    .pipe(reload({ stream: true }));
})

task('icons', () => {
  return src(`${SRC_PATH}/img/svg/*.svg`)
    .pipe(svgo({
      plugins: [{
        removeAttrs: {
          attrs: '(|stroke|style)'
        }
      }]
    }))
    .pipe(svgSprite({
      mode: {
        symbol: {
          sprite: '../sprite.svg'
        }
      }
    }))
    .pipe(dest(`${DIST_PATH}/img/svg`));
});

task('server', () => {
  browserSync.init({
    server: {
      baseDir: `./${DIST_PATH}`
    },
    open: false
  });
});

task('watch', () => {
  watch(`./${SRC_PATH}/styles/**/*.scss`, series('styles'));
  watch(`./${SRC_PATH}/*.html`, series('copy:html'));
  watch(`./${SRC_PATH}/scripts/*.js`, series('scripts'));
  watch(`./${SRC_PATH}/img/svg/*.svg`, series('icons'));
});


task(
  'default',
  series('clean',
    parallel('copy:html', 'styles', 'scripts', 'icons'),
    parallel('watch', 'server')
  )
);

task(
  'build',
  series('clean', parallel('copy:html', 'styles', 'scripts', 'icons'))
);





// const { src, dest, task, series, watch } = require('gulp');
// const rm = require('gulp-rm');
// const sass = require('gulp-sass');
// const concat = require('gulp-concat');
// const browserSync = require('browser-sync').create();
// const reload = browserSync.reload
// const sassGlob = require('gulp-sass-glob');
// const autoprefixer = require('gulp-autoprefixer');
// const px2rem = require('gulp-smile-px2rem');
// const gcmq = require('gulp-group-css-media-queries');
// const cleanCSS = require('gulp-clean-css');
// const sourcemaps = require('gulp-sourcemaps');
// const babel = require('gulp-babel');
// const uglify = require('gulp-uglify');
// const svgo = require('gulp-svgo');
// const svgSprite = require('gulp-svg-sprite');

// sass.compiler = require('node-sass');


// task('clean', () => {
//   return src('dist/**/*', { read: false })
//     .pipe(rm());
// });

// task('copy:html', () => {
//   return src('src/*.html')
//     .pipe(dest('dist'))
//     .pipe(reload({ stream: true }));
// });

// const styles = [
//   'node_modules/normalize.css/normalize.css',
//   'src/styles/main1.scss'
// ];

// task('styles', () => {
//   return src(styles)
//     .pipe(sourcemaps.init())
//     .pipe(concat('main.min.scss'))
//     .pipe(sassGlob())
//     .pipe(sass().on('error', sass.logError))
//     .pipe(px2rem())
//     .pipe(autoprefixer({
//       overrideBrowserslist: ['last 2 versions'],
//       cascade: false
//     }))
//     .pipe(gcmq())
//     .pipe(cleanCSS())
//     .pipe(sourcemaps.write())
//     .pipe(dest('dist'))
//     .pipe(reload({ stream: true }));
// });

// const libs = [
//   'node_modules/jquery/dist/jquery.js',
//   'src/scripts/*.js'
// ];

// task('scripts', () => {
//   return src(libs)
//     .pipe(sourcemaps.init())
//     .pipe(concat('main.min.js', { newLine: ';' }))
//     .pipe(babel({
//       presets: ['@babel/env']
//     }))
//     .pipe(uglify())
//     .pipe(sourcemaps.write())
//     .pipe(dest('dist'))
//     .pipe(reload({ stream: true }));
// })

// task('icons', () => {
//   return src('src/img/icons/*.svg')
//     .pipe(svgo({
//       plugins: [{
//         removeAttrs: {
//           attrs: '(fill|stroke|style|width|heigt|data.*)'
//         }
//       }]
//     }))
//     .pipe(svgSprite({
//       mode: {
//         symbol: {
//           sprite: '../sprite.svg'
//         }
//       }
//     }))
//     .pipe(dest('dist/img/icons'));
// });

// task('server', () => {
//   browserSync.init({
//     server: {
//       baseDir: "./dist"
//     },
//     open: false
//   });
// });

// watch('./src/styles/**/*.scss', series('styles'));
// watch('./src/*.html', series('copy:html'));
// watch('./src/scripts/*.js', series('scripts'));
// watch('./src/img/icons/*.svg', series('icons'));
// task('default', series('clean', 'copy:html', 'styles', 'scripts', 'icons', 'server'));