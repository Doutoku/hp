const gulp = require('gulp');
const webserver = require('gulp-webserver');

gulp.task('default', function () {
  gulp.src('./dev') // ������������Ū�ե���������֤����ǥ��쥯�ȥ����ꤹ��
    .pipe(webserver({
        host: 'localhost',
        port: 9000,
        livereload: true
    }));
});
