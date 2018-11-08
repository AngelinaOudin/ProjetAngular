import { Component, OnInit } from '@angular/core';
import { Race } from '../race';
import { ActivatedRoute } from '@angular/router';
import { RaceService } from '../race.service';

@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.css']
})
export class RaceComponent implements OnInit {

  race: Race;
  constructor(private route: ActivatedRoute,
    private service: RaceService) {
    this.race = new Race();
  }

  ngOnInit() {
    const id: number = parseInt(this.route.snapshot.paramMap.get('id'), 0);
    this.service.getRace(id).subscribe(p => this.race = p);
  }

}
