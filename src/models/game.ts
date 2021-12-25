export class Game {
    public players: string[] = [];
    public stack: string[] = [];
    public playedCards: string[] = [];
    public currentPlayer: number = 0;
    public maxPlayer: number = 0;
    public playCards: number = 0;

    constructor() {
        for (let i = 1; i < 14; i++) {
            this.stack.push('spade' + i);
            this.stack.push('hearts' + i);
            this.stack.push('clubs' + i);
            this.stack.push('diamonds' + i);
        }

        shuffle(this.stack);
    }
}

function shuffle(array) {
    let currentIndex = array.length, temporaryValue,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex]= array[randomIndex]  
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }