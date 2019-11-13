import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-tournament',
  templateUrl: './create-tournament.component.html',
  styleUrls: ['./create-tournament.component.css']
})
export class CreateTournamentComponent implements OnInit {
  isDirty = true;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  cancel() {
    this.router.navigate(['/tournaments']);
  }
}
