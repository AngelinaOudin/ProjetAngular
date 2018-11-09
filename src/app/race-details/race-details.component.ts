import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Race } from '../race';

@Component({
  selector: 'app-race-details',
  templateUrl: './race-details.component.html',
  styleUrls: ['./race-details.component.css']
})
export class RaceDetailsComponent implements OnInit {
  @Input() race: Race;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onClick = new EventEmitter<Race>();
  constructor() { }

  ngOnInit() {
  }

  addVote(race: Race) {
    this.onClick.emit(race);
  }

}
