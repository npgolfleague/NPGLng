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

}
