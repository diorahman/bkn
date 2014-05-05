#!/usr/bin/env node

/**
 * Module dependencies.
 */

var program = require('commander');
var bkn = require('../');

program
  .version('0.0.1')
  .parse(process.argv);

bkn(program, function (err, data){
  if (err) {
    console.log ('gagal euy! maap <3');
  } else {
    console.log(data);
    console.log('<3');
  }
  process.exit();
});



