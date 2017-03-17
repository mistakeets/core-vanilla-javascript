const Diamond = function() {}

Diamond.prototype.makeDiamond = (letter) => {
  if (letter === 'A') {
    return 'A\n'
  }
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('')
  const whiteSpace = ' '
  const middleOfDiamond = alphabet.indexOf(letter) + 1

  let tempStorage = []
  for (let i = 0; i < middleOfDiamond; i++) {
    tempStorage[i] = []
  }

  for (let i = 1; i < middleOfDiamond; i++) {
    tempStorage[i].push(alphabet[i])
  }

  for (let i = 0; i < middleOfDiamond; i++) {
    const spacesBeforeAndAfter = new Array((middleOfDiamond) - i).join(whiteSpace)
    tempStorage[i].push(alphabet[i])
    tempStorage[i].unshift(spacesBeforeAndAfter)
    tempStorage[i].push(spacesBeforeAndAfter)
  }

  tempStorage[1].splice(2, 0, whiteSpace)
  for (let i = 2; i < middleOfDiamond; i++) {
    const spacingMultiple = (3 + (i * 2) - 3)
    const spacesBetweenLetters = new Array(spacingMultiple).join(whiteSpace)
    tempStorage[i].splice(2, 0, spacesBetweenLetters)
  }

  let result = []
  for (let i = 0; i < middleOfDiamond; i++) {
    const assembleLine = tempStorage[i].join('')
    result.push(assembleLine)
  }
  for (let i = result.length - 2; i >= 0; i--) {
    result.push(result[i])
  }
  return result.join("\n") + "\n"
}
module.exports = Diamond