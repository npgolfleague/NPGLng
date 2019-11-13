import { Component, OnInit } from '@angular/core';
import { TournamentService } from './shared/tournament.service';
import { ToastrService } from '../common/toastr.service';


@Component({
  selector: 'app-tournaments-list',
  template: `
  <div>
    <h1>Upcoming Tournaments</h1>
    <hr>
    <div class="row">
      <div *ngFor = "let tournament of tournaments" class="col-md-5">
        <app-tournament-thumbnail (click)="handleThumbnailClick(tournament.date)" [tournament]= "tournament"></app-tournament-thumbnail>
      </div>
    </div>
  </div>
  `,
  styleUrls: ['./tournaments-list.component.css']
})
export class TournamentsListComponent implements OnInit  {
  tournaments: any;
  constructor(private tournamentService: TournamentService, private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.tournaments = this.tournamentService.getTournaments()
  }
  handleThumbnailClick(tournamentDate){
    this.toastr.success(tournamentDate);
  }
}


/*
export interface ITournament {
  id: number
  league: string
  course: string
  date: Date
  time: string
  imageUrl: string
  location?: {
      address: string
      city: string
      phone: string
  }
  pairings: IPairing[]
}

export interface IPairing {
  id: number
  startingHole: number
  golfer: string
  skinsStrokes: number
}  */
