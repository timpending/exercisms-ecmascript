
class BeerSong{
  static makeVerse(n){
      if (n > 2){
       return (n + ' bottles of beer on the wall, ' + n +' bottles of beer.\nTake one down and pass it around, '+(n-1)+' bottles of beer on the wall.\n');
      } else if (n===2 ){
        return '2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n';
      } else if (n === 1){
        return '1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n'
      } else {
        return 'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n'
      }
    }

  static verse(n){
      let verse = this.makeVerse(n)
      return verse
    }

  static sing(x, y){
    if (!x && !y) {
      let array = [];
      for (let i = 99; i>=0; i--){
        array.push(this.makeVerse(i));
      }
      return array.join('\n');
    }

    if (!y){
      let array = [];
      for (let i = x; i>=0; i--){
        array.push(this.makeVerse(i));
      }
      return array.join('\n');
    } else {
      let array = [];
      for (let i = x; i>=y; i--){
        array.push(this.makeVerse(i));
      }
      return array.join('\n');
    }
  }
}

export default BeerSong;
