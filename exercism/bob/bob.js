var Bob = function() {};

Bob.prototype.hey = function(text) {
  if (text.match(/[A-Z]/) && text === text.toUpperCase()) {
    return "Whoa, chill out!"
  } else if (text.endsWith("?")) {
    return "Sure."
  } else if (text.trim() === '') {
    return "Fine. Be that way!"
  }
  return "Whatever."
}

module.exports = Bob