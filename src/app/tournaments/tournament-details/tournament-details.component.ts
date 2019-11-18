import { Component, OnInit } from '@angular/core';
import { TournamentService } from '../shared/tournament.service';
import { ActivatedRoute } from '@angular/router';
import { ITournament } from '../shared';

@Component({
  templateUrl: './tournament-details.component.html',
  styleUrls: ['./tournament-details.component.css']
})
export class TournamentDetailsComponent implements OnInit {
  tournament: ITournament;

  constructor(private tournamentService: TournamentService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.tournament = this.tournamentService.getTournament(+this.route.snapshot.params.id)
  }
// <pairing-list [pairings]="event?.pairings"></pairing-list>
}
