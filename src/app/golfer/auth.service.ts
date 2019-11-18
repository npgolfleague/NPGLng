import { Injectable } from '@angular/core';
import { IGolfer } from './golfer.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentGolfer: IGolfer;

  constructor() { }

  loginGolfer(golferName: string, password: string) {
    this.currentGolfer = {
      id: 1,
      golferName: 'Commish',
      firstName: 'Eric',
      lastName: 'Lindquist'
    }
  }
  updateCurrentUser(firstName: string, lastName: string) {
    this.currentGolfer.firstName = firstName;
    this.currentGolfer.lastName = lastName;
  }
  isAuthenticated(){
    return !!this.currentGolfer;
  }
}
