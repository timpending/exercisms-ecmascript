class Transcriptor {
  toRna(strand) {
    let dna = ''
    for (let char of strand) {
      switch(char){
        case('G'):
          dna+='C';
          break;
        case('C'):
          dna+='G';
          break;
        case('T'):
          dna+='A';
          break;
        case('A'):
          dna+='U'
          break;
      }
    }
    return dna
  }
}

export default Transcriptor;
