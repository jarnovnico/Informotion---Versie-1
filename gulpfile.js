// Load plugins
var gulp = require('gulp'),
    jade = require('gulp-jade'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    del = require('del'),
    bower = require('gulp-bower'),
    connect = require('gulp-connect'),
    jadeInheritance = require('gulp-jade-inheritance'),
    changed = require('gulp-changed'),
    cached = require('gulp-cached'),
    gulpif = require('gulp-if'),
    gulpUtil = require('gulp-util'),
    plumber = require('gulp-plumber'),
    filter = require('gulp-filter');

// Don't break watch on error
var onError = function (err) {
  gulpUtil.beep();
  console.log(err);
  this.emit('end');
};

// Install bower components in specified folder
gulp.task('bower', function() {
  return bower()
    .pipe(gulp.dest('./bower_components'));
});


// Put up a local server
gulp.task('connect', function() {
  connect.server({
    root: 'build',
    port: 1234,
    livereload: true
  });
});

// Jade Templates 
gulp.task('templates', function() {
  return gulp.src('src/**/*.jade')

    // Catch errors
    .pipe(plumber({errorHandler: onError}))

    //only pass unchanged *main* files and *all* the partials
    .pipe(changed('build', {extension: '.html'}))

    //filter out unchanged partials, but it only works when watching
    .pipe(gulpif(global.isWatching, cached('jade')))

    //find files that depend on the files that have changed
    .pipe(jadeInheritance({basedir: 'src'}))

    //filter out partials (folders and files starting with "_" )
    .pipe(filter(function (file) {
        return !/\/_/.test(file.path) && !/^_/.test(file.relative);
    }))

    // Output Jade
    .pipe(jade({pretty: true}))

    // Distribute to build path
    .pipe(gulp.dest('build/'))
    
    // Reload page with LiveReload
    .pipe(connect.reload());
});

// Styles
gulp.task('styles', function() {
  return gulp.src('src/assets/styles/style.scss')
    
    // Catch errors
    .pipe(plumber({errorHandler: onError}))

    // Specify output
    .pipe(sass().on('error', sass.logError))

    // Autoprefixer
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    
    // Add a .min version
    .pipe(rename({ suffix: '.min' }))

    // Minify .min version
    .pipe(minifycss())

    // Distribute to build path
    .pipe(gulp.dest('build/styles'))

    // Show notification
    //.pipe(notify({ message: 'Styles task complete' }))

    // Livereload
    .pipe(connect.reload());
});

// Concat & Minify JS
gulp.task('scripts', function() {
  return gulp.src('src/assets/scripts/*.js')

    // Catch errors
    .pipe(plumber({errorHandler: onError}))

    // Concatinate in one file
    //.pipe(concat('main.js'))

    // Add a .min version
    //.pipe(rename({ suffix: '.min' }))

    // Minify with jsUglify
    //.pipe(uglify())

    // Distribute to build
    .pipe(gulp.dest('build/scripts'))

    // Show notifcation
    //.pipe(notify({ message: 'json task complete' }))

    // Livereload
    .pipe(connect.reload());
});

gulp.task('scripts2', function() {
  return gulp.src('src/assets/scripts/playcanvas/*.js')

    // Catch errors
    .pipe(plumber({errorHandler: onError}))

    // Concatinate in one file
    //.pipe(concat('main.js'))

    // Add a .min version
    //.pipe(rename({ suffix: '.min' }))

    // Minify with jsUglify
    //.pipe(uglify())

    // Distribute to build
    .pipe(gulp.dest('build'))

    // Show notifcation
    // .pipe(notify({ message: 'json task complete' }))

    // Livereload
    .pipe(connect.reload());
});

gulp.task('files', function() {
  return gulp.src('src/assets/files/**/*.json')

    // Catch errors
    .pipe(plumber({errorHandler: onError}))

    // Distribute to build
    .pipe(gulp.dest('build/files'))

    // Show notifcation
    // .pipe(notify({ message: 'files task complete' }))

    // Livereload
    .pipe(connect.reload());
});

gulp.task('json', function() {
  return gulp.src('src/assets/scripts/json/*.json')

    // Catch errors
    .pipe(plumber({errorHandler: onError}))

    // Distribute to build
    .pipe(gulp.dest('build/'))

    // Show notifcation
    // .pipe(notify({ message: 'Scripts task complete' }))

    // Livereload
    .pipe(connect.reload());
});

// Lint scripts
gulp.task('lint', function() {
  return gulp.src('src/assets/scripts/*.js')

    // Catch errors
    .pipe(plumber({errorHandler: onError}))

    // Lint all the scripts
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

// Compress Images
gulp.task('images', function() {
  return gulp.src('src/assets/images/*')
    
    // Catch errors
    .pipe(plumber({errorHandler: onError}))

    // Image optimization
    .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    
    // Distribute to build
    .pipe(gulp.dest('build/assets/images'))

    // Show notifcation
    .pipe(notify({ message: 'Images task complete' }))

    // Livereload
    .pipe(connect.reload());
});

// Clean
gulp.task('clean', function(cb) {
  del('build', cb);
});

// Default task
gulp.task('default', ['clean', 'bower'], function() {
    gulp.start('styles', 'scripts', 'templates', 'images','json','files','scripts2');
});

// Set global watch var to true
gulp.task('setWatch', function() {
  global.isWatching = true;
});

// Watch
gulp.task('watch', ['setWatch', 'templates', 'connect'], function() {

  // Watch .scss files
  gulp.watch('src/assets/styles/**/*.scss', ['styles']);

  // Watch .js files
  gulp.watch('src/assets/scripts/**/*.js', ['scripts']);

  gulp.watch('src/assets/scripts/playcanvas/*.js', ['scripts2']);

  // Watch .jade files
  gulp.watch('src/**/*.jade', ['templates']);

  // Watch image files
  gulp.watch('src/images/**/*', ['images']);

  // Watch any files in build/, reload on change
  gulp.watch(['build/**/*']).on('change', livereload.changed);

});