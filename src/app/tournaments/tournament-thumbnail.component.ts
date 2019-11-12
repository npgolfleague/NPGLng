import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-tournament-thumbnail',
  templateUrl: './tournament-thumbnail.component.html',
  styleUrls: ['./tournament-thumbnail.component.css']
})
export class TournamentThumbnailComponent implements OnInit {
  @Input() tournament: any;

  constructor() { }

  ngOnInit() {
  }

  getStartTimeStyle() {
    if (this.tournament && this.tournament.time === '05:30pm') {
      return {color: '#25df25', 'font-weight': 'bold'}
    }
    if (this.tournament) {
      return {color: 'red', 'font-weight': 'bold'};
    }
  }
}
