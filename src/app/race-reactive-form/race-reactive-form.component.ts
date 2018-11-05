import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Race } from '../race';
import { RaceService } from '../race.service';
import { PonyService } from '../pony.service';
import { NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { Pony } from '../pony';

@Component({
  selector: 'app-race-reactive-form',
  templateUrl: './race-reactive-form.component.html',
  styleUrls: ['./race-reactive-form.component.css']
})
export class RaceReactiveFormComponent implements OnInit {
  poneys: Array<Pony>;
  raceForm = this.fb.group({
    location: ['location', Validators.required],
    date: [new Date()],
    runners: [[]]
  });

  constructor(private fb: FormBuilder, private service: RaceService,
    private router: Router, private ponyService: PonyService) {
      this.poneys = [];
      this.ponyService.getAllPonies().subscribe((p) => this.poneys = p);
  }

  ngOnInit() {
  }

  onSubmit() {
    const dateForm: Date = new Date(this.raceForm.value.date.year, this.raceForm.value.date.month, this.raceForm.value.date.day);
    console.log(dateForm);
    const r: Race = new Race(this.raceForm.value.location, dateForm);
    this.service.addRace(r);
    this.router.navigate(['/']);
  }
}
