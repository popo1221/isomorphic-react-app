var gulp = require('gulp');
var browserify = require('gulp-browserify');
var clean = require('gulp-clean');
var less = require('gulp-less');
var uglify = require('gulp-uglify');

// Clean
gulp.task('clean', function() {
	return gulp.src(['./public/'])
	.pipe(clean());
});

// Scripts
gulp.task('scripts', function() {
	return gulp.src('app/scripts/browser/app.jsx')
	.pipe(browserify({
		debug: true,
		transform: [ 'reactify' ]
	}))
	.pipe(gulp.dest('./public/scripts/'));
	// .pipe(uglify());
});

// Styles
gulp.task('styles', function() {
	return gulp.src('app/styles/app.less')
	.pipe(less())
	.pipe(gulp.dest('./public/styles/'));
});

// Images
gulp.task('images', function() {
	return gulp.src('app/images/**/*')
	.pipe(gulp.dest('./public/images/'));
});

