var gulp 				= require('gulp');
var jade 				= require('gulp-jade');
var stylus 			= require('gulp-stylus');
var watch 			= require('gulp-watch');
var browserSync = require('browser-sync');

var sources = {
	jade: 'app/*.jade',
	stylus: 'app/styl/style.styl'
}

gulp.task('jade', function() {
	return gulp.src(sources.jade)
		.pipe(jade())
		.pipe(gulp.dest('dist/'));
});

gulp.task('stylus', function() {
	return gulp.src(sources.stylus)
		.pipe(stylus())
		.pipe(gulp.dest('dist/css/'))
		.pipe(browserSync.stream());
});

gulp.task('jade-watch', ['jade'], browserSync.reload);
gulp.task('stylus-watch', ['stylus'], browserSync.reload);

gulp.task('watch', function() {
	browserSync({
		server: {
			baseDir: 'dist/'
		}
	})
	gulp.watch(sources.jade, ['jade-watch']);
	gulp.watch(sources.stylus, ['stylus-watch']);
});

gulp.task('default', ['watch']);