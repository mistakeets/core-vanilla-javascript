var Diamond = function() {}

Diamond.prototype.makeDiamond = function(letter) {
  if (letter === 'A') {
    return 'A\n'
  }
  var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('')
  var character = ' '
  var middle = alphabet.indexOf(letter) + 1

  var tempStorage = []
  for (var i = 0; i < middle; i++) {
    tempStorage[i] = []
  }

  for (var i = 1; i < middle; i++) {
    tempStorage[i].push(alphabet[i])
  }

  for (var i = 0; i < middle; i++) {
    var spacesBeforeAndAfter = new Array((middle) - i).join(character)
    tempStorage[i].push(alphabet[i])
    tempStorage[i].unshift(spacesBeforeAndAfter)
    tempStorage[i].push(spacesBeforeAndAfter)
  }

  tempStorage[1].splice(2, 0, character)
  for (var x = 2; x < middle; x++) {
    var spacesBetweenLetters = new Array(3 + (x * 2) - 3).join(character)
    tempStorage[x].splice(2, 0, spacesBetweenLetters)
  }

  var result = []
  var assembleLine = ''
  for (i = 0; i < middle; i++) {
    assembleLine = tempStorage[i].join('')
    result.push(assembleLine)
  }
  for (k = result.length - 2; k >= 0; k--) {
    result.push(result[k])
  }
  return result.join("\n") + "\n"
}
module.exports = Diamond