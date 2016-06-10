var source = require('vinyl-source-stream'),
    gulp = require('gulp'),
    gutil = require('gulp-util'),
    browserify = require('browserify'),
    babelify = require('babelify'),
    watchify = require('watchify'),
    notify = require('gulp-notify'),
    autoprefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    minifyCSS = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    buffer = require('vinyl-buffer'),
    sass = require('gulp-sass'),
    livereload = require('gulp-livereload');

gulp.task('styles', function(){
  gulp.src('./src/sass/**/*.scss')
    .pipe(autoprefixer())
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCSS({compatibility: 'ie8'}))
    .pipe(rename('main.min.css'))
    .pipe(gulp.dest('./public/css'))
    .pipe(livereload());
});

function handleErrors() {
  var args = Array.prototype.slice.call(arguments);
  notify.onError({
    title: 'Compile Error',
    message: '<%= error.message %>'
  }).apply(this, args);
  this.emit('end');
}

function buildScript(file, watch) {
  var props = {
    entries: ['./src/js/' + file],
    debug : true,
    cache: {},
    packageCache: {},
    transform:  [babelify.configure({stage : 0 })]
  };

  var bundler = watch ? watchify(browserify(props)) : browserify(props);

  function rebundle() {
    var stream = bundler.bundle();
    return stream
      .on('error', handleErrors)
      .pipe(source(file))
      .pipe(gulp.dest('./public/js/'))
      .pipe(buffer())
      .pipe(uglify())
      .pipe(rename('main.min.js'))
      .pipe(gulp.dest('./public/js'))
      .pipe(livereload());
  }

  bundler.on('update', function() {
    rebundle();
    gutil.log('Rebundling your app...');
  });

  return rebundle();
}

gulp.task('scripts', function() {
  return buildScript('main.js', false);
});

gulp.task('default',['styles', 'scripts'], function(){
  livereload.listen();
  gulp.watch('./src/sass/*.*', ['styles']);
  return buildScript('main.js', true);
});
