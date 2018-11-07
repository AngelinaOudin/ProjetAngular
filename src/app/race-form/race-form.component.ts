import { Component, OnInit } from '@angular/core';
import { RaceService } from '../race.service';
import { Race } from '../race';
import { Router } from '@angular/router';
import { PonyService } from '../pony.service';
import { Pony } from '../pony';
import { NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-race-form',
  templateUrl: './race-form.component.html',
  styleUrls: ['./race-form.component.css']
})
export class RaceFormComponent implements OnInit {
  model: Race;
  ponies: Array<Pony>;
  dateModel: NgbDateStruct;

  constructor(private service: RaceService,
    private poneyService: PonyService,
    private calendar: NgbCalendar) {
      this.dateModel = this.calendar.getToday();
      this.model = new Race();
      this.poneyService.getAllPonies().subscribe(p => this.ponies = p);
     }

  ngOnInit() {
  }

  onSubmit() {
    this.model.date = new Date(this.dateModel.year, this.dateModel.month, this.dateModel.day);
    this.service.addRace(this.model);
    this.model = new Race();
  }

}
