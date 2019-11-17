
var nodemon = require('gulp-nodemon');
var gulp = require('gulp'); 
var webpack = require('webpack'); 

var serverProperties = require('./server/properties');


gulp.task("start:server", function() {
  nodemon({
    script: "./server/index.js",
    ext: "js",
    ignore: ["dist/"]
  })
  .on("restart", function() {
    console.log("restart");
  })
});

gulp.task('start:client', cb => {
    return require('./webpack.server').start(3000).then(() => {
        opn(`http://localhost:${3000}`);
        cb();
    });
});