import gulp from 'gulp';
import connect from 'gulp-connect'; 

gulp.task('copy', () => {
	return gulp.src('app/public/**')
	.pipe(gulp.dest('dist/assets/'))
	.pipe(connect.reload()); // перезагрузка сервера
});