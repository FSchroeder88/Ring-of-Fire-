import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  @Input() name;
  @Input() images =  '1.webp';
  @Input() activePlayer: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
