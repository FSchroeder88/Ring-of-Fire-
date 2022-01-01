import { Component, OnInit } from '@angular/core';
import { Game } from 'src/models/game';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { EditPlayerComponent } from '../edit-player/edit-player.component';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  game: Game;
  gameId: string;

  constructor(private route: ActivatedRoute, private firestore: AngularFirestore,   // einbinden in firestore (Datenbank)
    public dialog: MatDialog) { }      


  ngOnInit(): void {
    this.newGame();
    this.route.params.subscribe((params) => {
      console.log(params['id']);
      this.gameId = params['id'];

      this
        .firestore
        .collection('games')
        .doc(this.gameId)
        .valueChanges()
        .subscribe((game: any) => {         // einbinden in firestore (Datenbank)
          console.log('Game update', game);
          this.game.currentPlayer = game.currentPlayer;
          this.game.playedCards = game.playedCards;
          this.game.players = game.players;
          this.game.stack = game.stack;
          this.game.maxPlayer = game.maxPlayer;
          this.game.playCards = game.playCards;
          
          this.game.pickCardAnimation = game.pickCardAnimation;
          this.game.currentCard = game.currentCard;

        });
    });

  }



  newGame() {
    this.game = new Game();

  }

  takeCard() {

    if (!this.game.pickCardAnimation && this.game.playCards <= 51 && this.game.maxPlayer >= 1) {
      this.game.AUDIO_CARD.play();
      this.game.currentCard = this.game.stack.pop();
      this.game.pickCardAnimation = true;
      this.game.playCards++;
      console.log('New card:' + this.game.currentCard);
      console.log('Game is', this.game);
      

      setTimeout(() => {
        this.game.currentPlayer++;
        this.game.currentPlayer = this.game.currentPlayer % this.game.players.length;
        this.saveGame();
      }, 1400);
      

      setTimeout(() => {
        this.game.playedCards.push(this.game.currentCard);
        this.game.pickCardAnimation = false;
        this.saveGame();
      }, 1500);

    } else {
      this.newGame();
    }

  }

  editPlayer(playerId: number) {
    console.log('Edit player', playerId);
    
    const dialogRef = this.dialog.open(EditPlayerComponent);
    dialogRef.afterClosed().subscribe((change: string) => {
      console.log('Received change', change);
    });
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent);

    dialogRef.afterClosed().subscribe(name => {
      if (name && name.length > 0) {
        this.game.players.push(name);
        this.game.maxPlayer++;
        this.saveGame();
      }
    });
  }

  saveGame(){
    this
    .firestore
    .collection('games')
    .doc(this.gameId)
    .update(this.game.toJson());
  }
}
