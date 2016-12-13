class PhoneNumber {
  constructor(input){
    this.cleanNum = input.replace(/\D/g,'')
  }
  number(){
    if (this.cleanNum.length === 10) { return this.cleanNum };
    if (this.cleanNum.length === 11 && this.cleanNum[0] === '1') { return this.cleanNum.substring(1, this.cleanNum.length) };
    return '0000000000';
  }
  areaCode(){
    return this.cleanNum.substring(0,3);
  }
  toString(){
    return `(${this.areaCode()}) ${this.cleanNum.substring(3, 6)}-${this.cleanNum.substring(6, this.cleanNum.length)}`
  }
}

export default PhoneNumber;
