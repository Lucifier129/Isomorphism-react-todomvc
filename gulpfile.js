var gulp = require('gulp')
var del = require('del')
var uglify = require("gulp-uglify")
var webpack = require('gulp-webpack')
var Promise = require('es6-promise').Promise
var webpackConfig = require('./webpack.config.js')

var debug = true

var buildConfig = {
    src: 'public/js/src',
    dest: 'public/js/dest'
}

var watchConfig = {
    src: ['public/js/src/**/*.js'],
    task: ['build']
}

var delConfig = {
    path: ['public/js/dest/**/*.js']
}

gulp.task('clean', function(cb) {
    del(delConfig.path, cb)
})

//打包文件
gulp.task('build', ['clean'], function() {
    var promiseList = []
    var entryKeys = Object.keys(webpackConfig.entry)

    entryKeys.forEach(function(key) {
        var promise = new Promise(function(resolve, reject) {
            var stream = gulp.src(webpackConfig.entry[key][0])
                .pipe(webpack(webpackConfig))

            if (debug) {
                stream = stream.pipe(gulp.dest(buildConfig.src))
            }

            stream
                .pipe(uglify())
                .pipe(gulp.dest(buildConfig.dest))
                .on('end', resolve)
                .on('error', reject)
        })
        promiseList.push(promise)
    })

    return Promise.all(promiseList, 'build task done')
})


gulp.task('default', ['build'], function() {
    var watcher = gulp.watch(watchConfig.src, watchConfig.task)
    watcher.on('change', function(event) {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    })
})