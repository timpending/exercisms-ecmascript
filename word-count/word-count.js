class Words {
  count(input) {
    let wordArray = input.match(/\S+/g);
    let wordCloud = {};
    wordArray.forEach((word) => {
      let lcWord = word.toLowerCase();
      wordCloud[lcWord] = wordCloud.hasOwnProperty(lcWord) ? wordCloud[lcWord]+1 : 1
    })
    return wordCloud
  }
}

export default Words
