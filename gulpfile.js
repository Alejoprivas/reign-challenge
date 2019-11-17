
var nodemon = require('gulp-nodemon');
var gulp = require('gulp'); 

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

