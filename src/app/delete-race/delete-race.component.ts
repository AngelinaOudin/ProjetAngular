import { Component, OnInit } from '@angular/core';
import { RaceService } from '../race.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-race',
  templateUrl: './delete-race.component.html',
  styleUrls: ['./delete-race.component.css']
})
export class DeleteRaceComponent implements OnInit {

  constructor(private serviceRace: RaceService, private routeActivated: ActivatedRoute) { }

  ngOnInit() {
    const id: number = parseInt(this.routeActivated.snapshot.paramMap.get('id'), 0);
    this.serviceRace.deleteRace(id);
  }

}
