import { Component, OnInit } from '@angular/core';
import { RaceService } from '../race.service';
import { Race } from '../race';
import { Router } from '@angular/router';
import { PonyService } from '../pony.service';
import { Pony } from '../pony';

@Component({
  selector: 'app-race-form',
  templateUrl: './race-form.component.html',
  styleUrls: ['./race-form.component.css']
})
export class RaceFormComponent implements OnInit {
  model: Race;
  participants: Array<Pony>;
  selected: Array<boolean>;
  constructor(private service: RaceService, private router: Router, private ponyService: PonyService) {
    this.model = new Race();
    this.ponyService.getAllPonies().subscribe(p => this.participants = p);
    this.selected = new Array(this.participants.length);
   }

  ngOnInit() {
  }

  onSubmit() {
    this.service.addRace(this.model);
    this.selected.forEach((e, i) => {
      if (e === true) {
        this.model.ponies.push(this.participants[i]);
      }
    });
    this.router.navigate(['/']);
  }

}
