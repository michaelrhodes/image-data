var isContext2d = /\bCanvasRenderingContext2D\b/

module.exports = create

function create (w, h) {
  return isContext2d.test(this.constructor) ?
    this.createImageData(w, h) :
    new ImageData(new Uint8ClampedArray(w * h * 4), w, h)
}
