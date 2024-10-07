const fs = require('fs');
const handlebars = require('handlebars');

module.exports = function(file, locals = {}) {
  var source = fs.readFileSync(file, 'utf8')
  var template = handlebars.compile(source)

  return template(locals)
}
