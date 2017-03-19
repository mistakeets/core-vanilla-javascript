const Bowling = function(rolls) {
  this.rolls = rolls

}

Bowling.prototype.score = function() {

  let score = 0

  if (this.rolls.length === 0) {
    throw new Error('Score cannot be taken until the end of the game')
  }

  let tens = 0
  for (let a = 0; a < this.rolls.length; a++) {

    if (this.rolls[a] === 10) {
      tens = tens + 1
    }
  }

  if (this.rolls.length < 20 - tens || this.rolls[19 - tens] === 10 &&
    this.rolls.length < 22 - tens || this.rolls[20 - tens] === 10 && this.rolls.length < 23 - tens ||
    (tens === 0 && this.rolls.length < 21 && (this.rolls[18] + this.rolls[19] === 10))) {
    throw new Error('Score cannot be taken until the end of the game')
  }

  if (tens === 0 && this.rolls.length > 20 && !(this.rolls[19] + this.rolls[20] === 10)) {
    throw new Error('Should not be able to roll after game is over')
  }

  for (i = 0; i < this.rolls.length; i++) {
    const currentRoll = this.rolls[i]
    let turn = 0
    if (currentRoll < 10) {
      if (turn < 2) {
        turn = turn + 1
      } else if (turn === 2) {
        turn = 1
      }
    }

    if (currentRoll < 0 || currentRoll > 10) {
      throw new Error('Pins must have a value from 0 to 10')

      // make sure two scores in same frame are not more than ten 

    } else if (turn === 1 && currentRoll + this.rolls[i + 1] > 10) {
      throw new Error('Pin count exceeds pins on the lane')

    } else if (turn === 1 && (currentRoll + this.rolls[i + 1] < 10)) {
      score = score + (currentRoll + this.rolls[i + 1])
      i = i + 1
      turn = turn + 1

    } else if (turn === 1 && (currentRoll + this.rolls[i + 1] === 10)) {

      // then we know it is a spare

      score = score + (currentRoll + this.rolls[i + 1] + this.rolls[i + 2])

      // concerned with the next score 

      i = i + 1
      turn = turn + 1

      if (i === this.rolls.length - 1 || i === this.rolls.length - 2) {
        break
      }

    } else if (currentRoll === 10) {
      const bonusRoll = this.rolls[i + 1]
      const finalRoll = this.rolls[i + 2]
      score = score + (currentRoll + bonusRoll + finalRoll)

      if (this.rolls[i + 1] < 10 && currentRoll + bonusRoll + finalRoll > 20) {
        throw new Error('Pin count exceeds pins on the lane')
      }

      if (i === this.rolls.length - 2 || i === this.rolls.length - 3) {
        break
      }
    }
  }
  return score
}

module.exports = Bowling