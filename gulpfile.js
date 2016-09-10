const gulp = require('gulp');
const webserver = require('gulp-webserver');

gulp.task('default', function () {
  gulp.src('./dev') // 公開したい静的ファイルを配置したディレクトリを指定する
    .pipe(webserver({
        host: 'localhost',
        port: 9000,
        livereload: true
    }));
});
