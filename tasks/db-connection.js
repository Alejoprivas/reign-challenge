'use strict';
var properties = require('../server/properties')

var mongoose = require('mongoose'),
    connection = mongoose.connection,
    dbName = properties.db_url;

before(function (done) {
  connection.on('error', console.error);
  connection.once('open', function () { 
    done();
  });
  mongoose.connect(dbName);
});

after(function (done) {
  connection.close(done);
});