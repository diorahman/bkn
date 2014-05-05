var profileOf = require ("bkn-cheerio");

module.exports = function(program, cb){
  program.args = program.args || [];
  nip = program.args[0];
  profileOf(nip, cb);
}