var gulp = require('gulp'),
    minifycss = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    imagemin = require('gulp-imagemin'),
    browserSync = require('browser-sync').create();

//压缩图片
gulp.task('imagemin', function(){

    return gulp.src('images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('build/images'))
})

//压缩css
gulp.task('minifycss', function() {
    return gulp.src(['css/reset.css','css/app.css'])    //需要操作的文件
        .pipe(concat('app.css'))
        .pipe(minifycss())   //执行压缩
        .pipe(gulp.dest('build/css'));   //输出文件夹
});

//压缩，合并 js
gulp.task('minifyjs', function() {
    return gulp.src(['scripts/easeljs-0.8.2.min.js','scripts/preloadjs-0.6.1.min.js','scripts/game.js'])      //需要操作的文件
        .pipe(concat('game.js'))    //合并所有js到game.js
        .pipe(gulp.dest('build/js'))       //输出到文件夹
        .pipe(rename({suffix: '.min'}))   //rename压缩后的文件名
        .pipe(uglify())    //压缩
        .pipe(gulp.dest('build/js'));  //输出
});

gulp.task('serve', ['imagemin','minifycss','minifyjs'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch('css/**/*', ['minifycss']);
    gulp.watch('scripts/**/*', ['minifyjs']);
    gulp.watch('images/**/*', ['imagemin']);
    gulp.watch(["*.html",'css/**/*','scripts/**/*','images/**/*']).on('change', browserSync.reload);
});

//默认命令，在cmd中输入gulp后，执行的就是这个任务(压缩js需要在检查js之后操作)
gulp.task('default',['serve']);
