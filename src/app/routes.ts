import { Routes } from '@angular/router';
import { TournamentDetailsComponent } from './tournaments/tournament-details/tournament-details.component';
import { TournamentsListComponent } from './tournaments/tournaments-list.component';
import { CreateTournamentComponent } from './tournaments/create-tournament.component';
import { Error404Component } from './errors/error404.component';
import { TournamentRouteActivatorService } from './tournaments/tournament-details/tournament-route-activator.service';
import { TournamentListResolver } from './tournaments/tournaments-list-resolver.service';

export const appRoutes: Routes  = [
  { path: 'tournaments', component: TournamentsListComponent, resolve: {tournaments:TournamentListResolver} },
  { path: 'tournaments/new', component: CreateTournamentComponent, canDeactivate: ['canDeactivateCreateTournament'] },
  { path: 'tournaments/:id', component: TournamentDetailsComponent, canActivate: [TournamentRouteActivatorService] },
  { path: '404', component: Error404Component },
  { path: 'golfer', loadChildren: './golfer/golfer.module#GolferModule' },
  { path: '' , redirectTo: 'tournaments', pathMatch: 'full'}
] ;
