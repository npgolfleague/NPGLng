import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TournamentAppComponent } from './tournament-app.component';
import { TournamentsListComponent } from './tournaments/tournaments-list.component';
import { TournamentThumbnailComponent } from './tournaments/tournament-thumbnail.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports: [
    BrowserModule
  ],

  declarations: [
    TournamentAppComponent,
    TournamentsListComponent,
    TournamentThumbnailComponent,
    NavbarComponent
  ],

  providers: [],
  bootstrap: [TournamentAppComponent]
})
export class AppModule { }
