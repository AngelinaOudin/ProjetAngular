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
  date: {year: number, month: number};

  constructor(private service: RaceService,
    private calendar: NgbCalendar,
    private router: Router,
    private ponyService: PonyService) {
    this.dateModel = this.calendar.getToday();
    this.model = new Race();
    this.ponyService.getAllPonies().subscribe(p => this.ponies = p);
  }

  ngOnInit() {
  }

  onSubmit() {
    // Attention : le -1 est dégueulasse, mais bug
    this.model.date = new Date(this.dateModel.year, this.dateModel.month - 1, this.dateModel.day);
    this.service.addRace(this.model);
    this.router.navigate(['/']);
  }

}
