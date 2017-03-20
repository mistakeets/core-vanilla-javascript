function bracket(input) {
  var indexArray = input.split('')
  var valueArray = []

  for (var i = 0; i < indexArray.length; i++) {
    if (indexArray[i] === '(') {
      valueArray.push(7);
    }
    if (indexArray[i] === ')') {
      valueArray.push(-7);
    }
    if (indexArray[i] === '{') {
      valueArray.push(5);
    }
    if (indexArray[i] === '}') {
      valueArray.push(-5);
    }
    if (indexArray[i] === '[') {
      valueArray.push(2)
    }
    if (indexArray[i] === ']') {
      valueArray.push(-2)
    }
  }
  for (var j = 0; j < valueArray.length; j++) {
    if (valueArray[j] + valueArray[j + 1] === 0 && valueArray[j] > valueArray[j + 1]) {
      valueArray.splice(j + 1, 1)
      valueArray.splice(j, 1)

      for (j = valueArray.length; j >= 0; j--) {
        if (valueArray[j] + valueArray[j - 1] === 0 && valueArray[j - 1] > valueArray[j]) {
          valueArray.splice(j, 1)
          valueArray.splice(j - 1, 1)
        }
      }
    }
  }
  if (valueArray.length === 0) {
    return true
  } else {
    return false
  }
}
module.exports = bracket