import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-player-mobile',
  templateUrl: './app-player-mobile.component.html',
  styleUrls: ['./app-player-mobile.component.scss']
})
export class AppPlayerMobileComponent implements OnInit {

  @Input() name;
  @Input() images =  '1.webp';
  @Input() activePlayer: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
