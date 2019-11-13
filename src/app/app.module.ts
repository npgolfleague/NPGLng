import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TournamentAppComponent } from './tournament-app.component';
import { TournamentsListComponent } from './tournaments/tournaments-list.component';
import { TournamentThumbnailComponent } from './tournaments/tournament-thumbnail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TournamentService } from './tournaments/shared/tournament.service';

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

  providers: [ TournamentService],
  bootstrap: [TournamentAppComponent]
})
export class AppModule { }
