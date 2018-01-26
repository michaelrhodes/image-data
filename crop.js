var create = require('./create')

module.exports = crop

function crop (from, x, y, w, h) {
  var to = create.call(this, w, h)
  var n = 0, o, j, i
  var fw = from.width
  var fd = from.data
  var td = to.data
  x *= 4, y *= 4

  for (j = y; j < y + h * 4; j += 4) {
    for (i = x; i < x + w * 4; i += 4) {
      o = fw * j + i
      td[n++] = fd[o++]
      td[n++] = fd[o++]
      td[n++] = fd[o++]
      td[n++] = fd[o++]
    }
  }

  return to
}
