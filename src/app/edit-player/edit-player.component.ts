import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.scss']
})
export class EditPlayerComponent implements OnInit {

  profilePictures = ['1.webp', '2.png', 'monkey.png', 'pinguin.svg', 'winkboy.svg'];

  constructor() { }

  ngOnInit(): void {
  }

}
