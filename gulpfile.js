var gulp = require('gulp'),
    jshint = require('gulp-jshint');
// configure the jshint task
gulp.task('jshint', function() {
    return gulp.src('js/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});

// configure which files to watch and what tasks to use on file changes
gulp.task('watch', function() {
    gulp.watch('js/**/*.js', ['jshint']);
});
// define the default task and add the watch task to it
gulp.task('default', ['watch']);
