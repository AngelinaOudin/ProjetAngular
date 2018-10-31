import { Component, OnInit } from '@angular/core';
import { RaceService } from '../race.service';
import { Race } from '../race';
import { Router } from '@angular/router';

@Component({
  selector: 'app-race-form',
  templateUrl: './race-form.component.html',
  styleUrls: ['./race-form.component.css']
})
export class RaceFormComponent implements OnInit {
  model: Race;
  constructor(private service: RaceService, private router: Router) {
    this.model = new Race();
   }

  ngOnInit() {
  }

  onSubmit() {
    this.service.addRace(this.model);
    this.router.navigate(['/']);
  }

}
