import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Race } from '../race';
import { RaceService } from '../race.service';
import { PonyService } from '../pony.service';
import { NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute } from '@angular/router';
import { Pony } from '../pony';

@Component({
  selector: 'app-race-reactive-form',
  templateUrl: './race-reactive-form.component.html',
  styleUrls: ['./race-reactive-form.component.css']
})
export class RaceReactiveFormComponent implements OnInit {
  idRace: number;
  poneys: Array<Pony>;
  poniesTarget: Array<Pony>;
  dateModel: NgbDateStruct;
  date: {year: number, month: number, day: number};
  raceForm = this.fb.group({
    location: ['location', Validators.required],
    date: [new Date()],
    runners: [[]]
  });

  add: boolean;

  constructor(private fb: FormBuilder, private service: RaceService,
    private router: Router, private ponyService: PonyService,
    private route: ActivatedRoute) {
    this.poneys = [];
    this.poniesTarget = [];
    this.ponyService.getAllPonies().subscribe((p) => this.poneys = p);
    this.add = true;
  }

  ngOnInit() {
    if (this.route.snapshot.paramMap.get('id') === null) {
      this.add = true;
    } else {
      this.add = false;
      const id = parseInt(this.route.snapshot.paramMap.get('id'), 0);
      this.idRace = id;
      this.service.getRace(id).subscribe(r => {
        this.raceForm.setValue({
          location: r.location,
          date: r.date,
          runners: r.ponies
        });
        this.poniesTarget = this.raceForm.value.runners;
        this.ponyService.getAllPonies().subscribe(p => {
          this.poneys = p;
          for (const pony of r.ponies) {
            this.poneys = this.poneys.filter(e => e.id !== pony.id);
          }
        });
      });
      this.poneys.forEach((p) => {
        for (const ponyT of this.poniesTarget) {
          if (p.id === ponyT.id) {
            this.poneys.splice(this.poneys.indexOf(p), 1);
          }
        }
      });
    }
  }

  onSubmit() {
    const dateForm: Date = new Date(this.raceForm.value.date.year, this.raceForm.value.date.month, this.raceForm.value.date.day);
    const r: Race = new Race(this.raceForm.value.location, dateForm);
    r.ponies = this.poniesTarget;
    this.poniesTarget.forEach((p) => this.poneys.push(p));

    if (this.add) {
      this.service.addRace(r);
    } else {
      this.service.updateRace(this.idRace, r);
    }
  }
}
