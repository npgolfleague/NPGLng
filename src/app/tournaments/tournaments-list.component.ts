import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tournaments-list',
  templateUrl: './tournaments-list.component.html',
  styleUrls: ['./tournaments-list.component.css']
})
export class TournamentsListComponent  {
  tournament = {
    id: 1,
    league: 'NPGL',
    course: 'Eagles Forest',
    date: '09/26/19',
    time: '05:30pm',
    imageUrl: '/assets/images/angularconnect-shield.png',
    location: {
        address: 'Nine Eagles Dr',
        city: 'Odessa',
        phone: '555-1234'
    }
    // pairings: IPairing[]
  };

/*
 constructor(); { }

 ngOnInit();: void {
    throw new Error("Method not implemented.");
  };
*/
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
