function wordProblem(question) {

  if (question.match(/cubed|squared|factorial/g)) {
    return 'too advanced'
  }
  if (!question.match(/\d/g)) {
    return 'irrelevant'
  }
  let array = []
  let numberArray = []
  let a = 0

  numberArray = (question.match(/-?\d{1,25}/g))
  findOperator = question.match(/plus|minus|multiplied|divided/g)

  if (findOperator[0] === "plus") {
    a = parseInt(numberArray[0], 10) + parseInt(numberArray[1], 10)
    numberArray.unshift(a)
  } else if (findOperator[0] === "minus") {
    a = parseInt(numberArray[0], 10) - parseInt(numberArray[1], 10)
    numberArray.unshift(a)
  } else if (findOperator[0] === "multiplied") {
    a = parseInt(numberArray[0], 10) * parseInt(numberArray[1], 10)
    numberArray.unshift(a)
  } else if (findOperator[0] === "divided") {
    a = parseInt(numberArray[0], 10) / parseInt(numberArray[1], 10)
    numberArray.unshift(a)

  }

  if (findOperator.length > 1) {
    if (findOperator[1] === "plus") {
      a = a + parseInt(numberArray[3], 10)
    } else if (findOperator[1] === "minus") {
      a = a - parseInt(numberArray[3], 10)
    } else if (findOperator[1] === "multiplied") {
      a = a * parseInt(numberArray[3], 10)
    } else if (findOperator[1] === "divided") {
      a = a / parseInt(numberArray[3], 10)
    }
  }
  return a
}
module.exports = wordProblem