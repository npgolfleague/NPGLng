import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { TournamentService } from './shared/tournament.service';
import { map } from 'rxjs/operators';

@Injectable()
export class TournamentListResolver implements Resolve<any> {

  constructor(private tournamentService: TournamentService) {}
  resolve() {
    return this.tournamentService.getTournaments().pipe(map(tournaments => tournaments));
  }
}
