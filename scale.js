var create = require('./create')

module.exports = scale 

function scale (from, x) {
  var fw = from.width
  var fh = from.height
  var fa = fw / fh
  var tw = (fw * x) | 0
  var th = (tw / fa) | 0

  var to = create.call(this, tw, th)
  var fd = from.data
  var td = to.data

  var sw = fw < tw ? (fw - 1) / tw : fw / tw
  var sh = fh < th ? (fh - 1) / th : fh / th
  var w = fw * 4
  var lw = fw - 1
  var lh = fh - 1
  var fx, fy, fx0, fy0
  var rx, ry, rx1, ry1
  var p1, p2, p3, p4
  var w1, w2, w3, w4
  var tx, ty, c
  for (ty = 0; ty < th; ty++) {
    for (tx = 0; tx < tw; tx++) {
      fx = tx * sw
      fy = ty * sh
      fx0 = fx | 0
      fy0 = fy | 0
      p1 = fx0 * 4 + fy0 * w
      p2 = p1 + (fx0 < lw ? 4 : 0)
      p3 = p1 + (fy0 < lh ? w : 0)
      p4 = p3 + (fx0 < lw ? 4 : 0)
      rx = fx - fx0
      ry = fy - fy0
      rx1 = 1 - rx
      ry1 = 1 - ry
      w1 = rx1 * ry1
      w2 = rx * ry1
      w3 = rx1 * ry
      w4 = rx * ry
      for (c = 0; c < 4; c++) {
        td[(tx + ty * tw) * 4 + c] = (
          w1 * fd[p1 + c] +
          w2 * fd[p2 + c] +
          w3 * fd[p3 + c] +
          w4 * fd[p4 + c]
        )
      }
    }
  }

  return to
}
