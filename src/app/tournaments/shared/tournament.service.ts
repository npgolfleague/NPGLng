import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TournamentService {

  constructor() { }

  getTournaments(){
    const subject = new Subject();
    setTimeout(() => { subject.next(TOURNAMENTS); subject.complete(); }, 100);
    return subject;
  }

  getTournament(id: number) {
    return TOURNAMENTS.find(tournament => tournament.id === id);
  }
}

const  TOURNAMENTS = [
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
    //pairings: IPairing[]
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

