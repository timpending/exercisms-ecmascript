class Hamming {
  compute(str1, str2){
    if (str1.length !== str2.length){
      throw new Error('DNA strands must be of equal length.')
    }
    let count=0
    let pos = -1
    for (let a of str1){
      pos++
      if (a !== str2[pos]){
        count++
      }
    }
    return count
  }
}

export default Hamming;
