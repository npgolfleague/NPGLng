import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { ITournament } from './tournament.model';

@Injectable({
  providedIn: 'root'
})
export class TournamentService {

  constructor() { }

  getTournaments(): Observable<ITournament[]> {
    const subject = new Subject<ITournament[]>();
    setTimeout(() => { subject.next(TOURNAMENTS); subject.complete(); }, 100);
    return subject;

  }

  getTournament(id: number) {
    return TOURNAMENTS.find(tournament => tournament.id === id);
  }
  saveTournament(tournament) {
    tournament.id = 999;
    tournament.pairings = [];
    TOURNAMENTS.push(tournament);
  }
}

const  TOURNAMENTS: ITournament[] = [
    {
    id: 1,
    league: 'NPGL',
    course: 'Eagles Forest',
    date: new Date('09/26/19'),
    time: '05:15pm',
    imageUrl: '/assets/images/angularconnect-shield.png',
    location: {
        address: 'Nine Eagles Dr',
        city: 'Odessa',
        phone: '555-1234'
    },
    pairings: [
      {
      id: 1,
      startingHole: 1,
      golfer: 'Paul Suh',
      quota: 8,
      skinsStrokes: 6
      },
      {
      id: 1,
      startingHole: 1,
      golfer: 'Frank Fundora',
      quota: 9,
      skinsStrokes: 7
      },
      {
      id: 2,
      startingHole: 1,
      golfer: 'Tom Kiernan',
      quota: 11,
      skinsStrokes: 3
      },
      {
      id: 3,
      startingHole: 1,
      golfer: 'Barry Mera',
      quota: 10,
      skinsStrokes: 4
      },
      {
      id: 4,
      startingHole: 2,
      golfer: 'Eric Lindquist',
      quota: 8,
      skinsStrokes: 5
      },
      {
      id: 5,
      startingHole: 1,
      golfer: 'John Veltri',
      quota: 9,
      skinsStrokes: 4
      },
      {
      id: 6,
      startingHole: 1,
      golfer: 'Joe Sapienza',
      quota: 2,
      skinsStrokes: 7
      }
  ]
  },
  {
    id: 2,
    league: 'NPGL',
    course: 'Eagles Lakes',
    date: new Date('10/03/19'),
    time: '05:30pm',
    imageUrl: '/assets/images/angularconnect-shield.png',
    pairings: [
      {
      id: 1,
      startingHole: 2,
      golfer: 'Eric Lindquist',
      quota: 8,
      skinsStrokes: 5
      },
      {
      id: 2,
      startingHole: 1,
      golfer: 'John Veltri',
      quota: 9,
      skinsStrokes: 4
      },
      {
      id: 3,
      startingHole: 1,
      golfer: 'Joe Sapienza',
      quota: 2,
      skinsStrokes: 7
      }
    ]
  },
  {
    id: 3,
    league: 'NPGL',
    course: 'Eagles Forest',
    date: new Date('10/10/19'),
    time: '05:30pm',
    imageUrl: '/assets/images/angularconnect-shield.png',
    location: {
        address: 'Nine Eagles Dr',
        city: 'Odessa',
        phone: '555-1234'
    },
    pairings: [
      {
      id: 1,
      startingHole: 2,
      golfer: 'Eric Lindquist',
      quota: 8,
      skinsStrokes: 5
      },
      {
      id: 2,
      startingHole: 1,
      golfer: 'John Veltri',
      quota: 8,
      skinsStrokes: 4
      },
      {
      id: 3,
      startingHole: 1,
      golfer: 'Joe Sapienza',
      quota: 2,
      skinsStrokes: 7
      }
    ]
  },
  {
    id: 4,
    league: 'NPGL',
    course: 'Eagles Lakes',
    date: new Date('09/26/19'),
    time: '05:30pm',
    imageUrl: '/assets/images/angularconnect-shield.png',
    location: {
        address: 'Nine Eagles Dr',
        city: 'Odessa',
        phone: '555-1234'
    },
    pairings: [
      {
      id: 1,
      startingHole: 1,
      golfer: 'Paul Suh',
      quota: 9,
      skinsStrokes: 6
      },
      {
      id: 1,
      startingHole: 1,
      golfer: 'Frank Fundora',
      quota: 9,
      skinsStrokes: 7
      },
      {
      id: 2,
      startingHole: 1,
      golfer: 'Tom Kiernan',
      quota: 11,
      skinsStrokes: 3
      },
      {
      id: 3,
      startingHole: 1,
      golfer: 'Barry Mera',
      quota: 8,
      skinsStrokes: 4
      },
      {
      id: 4,
      startingHole: 2,
      golfer: 'Eric Lindquist',
      quota: 7,
      skinsStrokes: 5
      },
      {
      id: 5,
      startingHole: 1,
      golfer: 'John Veltri',
      quota: 8,
      skinsStrokes: 4
      },
      {
      id: 6,
      startingHole: 1,
      golfer: 'Joe Sapienza',
      quota:2,
      skinsStrokes: 7
      }
  ]
  },
  {
    id: 5,
    league: 'NPGL',
    course: 'Eagles Lakes',
    date: new Date('10/17/19'),
    time: '05:30pm',
    imageUrl: '/assets/images/angularconnect-shield.png',
    location: {
        address: 'Nine Eagles Dr',
        city: 'Odessa',
        phone: '555-1234'
    },
    pairings: [
      {
      id: 1,
      startingHole: 1,
      golfer: 'Paul Suh',
      quota: 8,
      skinsStrokes: 6
      },
      {
      id: 1,
      startingHole: 1,
      golfer: 'Frank Fundora',
      quota: 7,
      skinsStrokes: 7
      },
      {
      id: 2,
      startingHole: 1,
      golfer: 'Tom Kiernan',
      quota: 8,
      skinsStrokes: 3
      },
      {
      id: 3,
      startingHole: 1,
      golfer: 'Barry Mera',
      quota: 10,
      skinsStrokes: 4
      },
      {
      id: 4,
      startingHole: 2,
      golfer: 'Eric Lindquist',
      quota: 8,
      skinsStrokes: 5
      },
      {
      id: 5,
      startingHole: 1,
      golfer: 'John Veltri',
      quota: 9,
      skinsStrokes: 4
      },
      {
      id: 6,
      startingHole: 1,
      golfer: 'Joe Sapienza',
      quota: 2,
      skinsStrokes: 7
      }
  ]
  }
];

