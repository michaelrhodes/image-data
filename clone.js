var create = require('./create')

module.exports = clone 

function clone (from, x) {
  var to = create.call(this, from.width, from.height)
  var fd = from.data, td = to.data
  var i = 0, l = fd.length
  for (; i < l; i++) td[i] = fd[i]
  return to
}
