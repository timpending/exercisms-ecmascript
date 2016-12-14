


class Anagram {
  constructor(word){
    this.word = word
  }

  matches(cases) {
    let word = this.word
    let sorted = this.word.toLowerCase().split('').sort().join('');
    let output = [];
    let array = Array.isArray(cases) ? cases : Array.prototype.slice.call(arguments)

    array.forEach(test => {
      let sortedTest = test.toLowerCase().split('').sort().join('');
          if (sortedTest === sorted && word !== test.toLowerCase()) {
            output.push(test)
          }
    })

    return output
  }
};



export default Anagram;
