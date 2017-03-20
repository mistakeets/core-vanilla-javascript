const Series = function(series) {
  if (!series.match(/^\d*$/g)) {
    throw new Error('Invalid input.')
  }
  this.series = [...series]
}

Series.prototype.largestProduct = function(size) {
  if (size < 0) {
    throw new Error('Invalid input.')
  }

  if (size > this.series.length) {
    throw new Error('Slice size is too big.')
  }

  let output = 0

  for (let value = 0; value <= this.series.length - size; value++) {
    let slice = this.series.slice(value, value + size)
    let product = slice.reduce((a, b) => a * b, 1)
    output = (product > output) ? product : output
  }
  return output;
}
module.exports = Series