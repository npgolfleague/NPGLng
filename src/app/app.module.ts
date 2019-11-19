import {
  TournamentsListComponent,
  TournamentThumbnailComponent,
  TournamentService,
  TournamentDetailsComponent,
  CreateTournamentComponent,
  TournamentListResolver,
  TournamentRouteActivatorService
} from './tournaments/index';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TournamentAppComponent } from './tournament-app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { appRoutes } from './routes';
import { RouterModule, ActivatedRouteSnapshot } from '@angular/router';
import { Error404Component } from './errors/error404.component';
import { AuthService } from './golfer/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateSessionComponent } from './tournaments/tournament-details/create-session.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],


  declarations: [
    TournamentAppComponent,
    TournamentsListComponent,
    TournamentThumbnailComponent,
    NavbarComponent,
    TournamentDetailsComponent,
    CreateTournamentComponent,
    Error404Component,
    CreateSessionComponent
  ],

  providers: [
    TournamentService,
    TournamentRouteActivatorService,
    {
      provide: 'canDeactivateCreateTournament',
      useValue: checkDirtyState
    },
    TournamentListResolver,
    AuthService
  ],
  bootstrap: [TournamentAppComponent]
})
export class AppModule { }


export function checkDirtyState(component: CreateTournamentComponent) {
  if (component.isDirty) {
    return window.confirm('You have not saved this tournament, do you really want to cancel?');
  }
  return true;
}
