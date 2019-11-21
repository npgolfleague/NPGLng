import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IPairing } from '../shared';

@Component({
  selector: 'app-create-pairing',
  templateUrl: './create-pairing.component.html',
  styleUrls: ['./create-pairing.component.css']
})
export class CreatePairingComponent implements OnInit {
  newPairingForm: FormGroup;
  golfer: FormControl;
  startingHole: FormControl;

  constructor() { }

  ngOnInit() {
    this.golfer = new FormControl('', Validators.required);
    this.startingHole = new FormControl('', Validators.required);

    this.newPairingForm = new FormGroup({
      golfer: this.golfer,
      startingHole: this.startingHole
    });
  }

  savePairing(formValues) {
    const pairing: IPairing = {
      id: undefined,
      golfer: formValues.golfer,
      startingHole: formValues.startingHole
    }
    console.log(pairing);
  }

}
