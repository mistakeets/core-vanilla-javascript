module.exports = class SecretHandshake {
  constructor(input) {
    if (typeof input != 'number') {
      throw new Error('Handshake must be a number')
    }
    this.input = input
  }
  commands() {
    let result = []
    let binaryNumber = (this.input >>> 0).toString(2)
    let binaryArray = binaryNumber.split('').reverse()

    if (binaryArray[0] === '1') {
      result.push('wink')
    }
    if (binaryArray[1] === '1') {
      result.push('double blink')
    }
    if (binaryArray[2] === '1') {
      result.push('close your eyes')
    }
    if (binaryArray[3] === '1') {
      result.push('jump')
    }
    if (binaryArray[4] === '1') {
      result.reverse()
    }
    return result
  }
}