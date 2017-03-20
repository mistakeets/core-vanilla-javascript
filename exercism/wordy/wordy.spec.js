var wordProblem = require('./wordy');

describe('word problem', function() {

  it('add 1', function() {
    var question = 'What is 1 plus 1?';
    expect(wordProblem(question)).toEqual(2);
  });

  it('add 2', function() {
    var question = 'What is 53 plus 2?';
    expect(wordProblem(question)).toEqual(55);
  });

  it('add negative numbers', function() {
    var question = 'What is -1 plus -10?';
    expect(wordProblem(question)).toEqual(-11);
  });

  it('add more digits', function() {
    var question = 'What is 123 plus 45678?';
    expect(wordProblem(question)).toEqual(45801);
  });

  it('subtract', function() {
    var question = 'What is 4 minus -12?';
    expect(wordProblem(question)).toEqual(16);
  });

  it('multiply', function() {
    var question = 'What is -3 multiplied by 25?';
    expect(wordProblem(question)).toEqual(-75);
  });

  it('divide', function() {
    var question = 'What is 33 divided by -3?';
    expect(wordProblem(question)).toEqual(-11);
  });

  it('add twice', function() {
    var question = 'What is 1 plus 1 plus 1?';
    expect(wordProblem(question)).toEqual(3);
  });

  it('add then subtract', function() {
    var question = 'What is 1 plus 5 minus -2?';
    expect(wordProblem(question)).toEqual(8);
  });

  it('subtract twice', function() {
    var question = 'What is 20 minus 4 minus 13?';
    expect(wordProblem(question)).toEqual(3);
  });

  it('subtract then add', function() {
    var question = 'What is 17 minus 6 plus 3?';
    expect(wordProblem(question)).toEqual(14);
  });

  it('multiply twice', function() {
    var question = 'What is 2 multiplied by -2 multiplied by 3?';
    expect(wordProblem(question)).toEqual(-12);
  });

  it('add then multiply', function() {
    var question = 'What is -3 plus 7 multiplied by -2?';
    expect(wordProblem(question)).toEqual(-8);
  });

  it('divide twice', function() {
    var question = 'What is -12 divided by 2 divided by -3?';
    expect(wordProblem(question)).toEqual(2);
  });

  it('too advanced', function() {
    var question = 'What is 53 cubed?';
    expect(wordProblem(question)).toEqual('too advanced');
  });

  it('irrelevant', function() {
    var question = 'Who is the president of the United States?';
    expect(wordProblem(question)).toEqual('irrelevant');
  });

});