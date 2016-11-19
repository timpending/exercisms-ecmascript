//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

let question = (input) => input.endsWith('?');
let silence = (input) => input.replace(/\s+/g, '') === '';
let yelling = (input) => input.toUpperCase() === input && input.toLowerCase() !== input;

class Bob {
  hey(message) {
    if (yelling(message)) {
      return 'Whoa, chill out!'
    } else if (question(message)) {
      return 'Sure.';
    }
    else if (silence(message)){
      return 'Fine. Be that way!';
    } else {
    return 'Whatever.';
    }
  }
}

export default Bob;
