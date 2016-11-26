class Pangram {
  constructor(phrase){
    this.phrase = phrase
    this.alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    this.lc = this.phrase.toLowerCase();
    this.indices = [];

    for (var i = 0; i < this.alphabet.length; i++) {
      if (this.lc.indexOf(this.alphabet[i]) > -1) {
        this.indices.push(i)
      }
    }
  }

  isPangram(){
    if (this.indices.length === 26 ){
        return true
    } else {
        return false
    }
  }
}

export default Pangram;
