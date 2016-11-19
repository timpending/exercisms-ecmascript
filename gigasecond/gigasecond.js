class Gigasecond {
  constructor(givenDate){
    this.givenDate = givenDate;
  }

  date() {
    let outputGigasecond = new Date(this.givenDate.getTime() + 1000000000000)
    return outputGigasecond
  }

}

export default Gigasecond;
