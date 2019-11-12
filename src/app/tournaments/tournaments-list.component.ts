import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tournaments-list',
  template: `
  <div>
    <h1>Upcoming Tournaments</h1>
    <hr>
    <div class="row">
      <div *ngFor = "let tournament of tournaments" class="col-md-5">
        <app-tournament-thumbnail [tournament]= "tournament"></app-tournament-thumbnail>
      </div>
    </div>
  </div>
  `,
  styleUrls: ['./tournaments-list.component.css']
})
export class TournamentsListComponent  {
  tournaments = [
    {
    id: 1,
    league: 'NPGL',
    course: 'Eagles Forest',
    date: '09/26/19',
    time: '05:15pm',
    imageUrl: '/assets/images/angularconnect-shield.png',
    location: {
        address: 'Nine Eagles Dr',
        city: 'Odessa',
        phone: '555-1234'
    }
    // pairings: IPairing[]
  },
  {
    id: 2,
    league: 'NPGL',
    course: 'Eagles Lakes',
    date: '10/03/19',
    time: '05:30pm',
    imageUrl: '/assets/images/angularconnect-shield.png'


    // pairings: IPairing[]
  },
  {
    id: 3,
    league: 'NPGL',
    course: 'Eagles Forest',
    date: '10/10/19',
    time: '05:30pm',
    imageUrl: '/assets/images/angularconnect-shield.png',
    location: {
        address: 'Nine Eagles Dr',
        city: 'Odessa',
        phone: '555-1234'
    }
    // pairings: IPairing[]
  },
  {
    id: 4,
    league: 'NPGL',
    course: 'Eagles Lakes',
    date: '09/26/19',
    time: '05:30pm',
    imageUrl: '/assets/images/angularconnect-shield.png',
    location: {
        address: 'Nine Eagles Dr',
        city: 'Odessa',
        phone: '555-1234'
    }
    // pairings: IPairing[]
  },
  {
    id: 5,
    league: 'NPGL',
    course: 'Eagles Lakes',
    date: '10/17/19',
    time: '05:30pm',
    imageUrl: '/assets/images/angularconnect-shield.png',
    location: {
        address: 'Nine Eagles Dr',
        city: 'Odessa',
        phone: '555-1234'
    }
    // pairings: IPairing[]
  }
];

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
