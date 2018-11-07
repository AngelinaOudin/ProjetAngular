import { Injectable } from '@angular/core';
import { Race } from './race';
import { RACES } from './races-mock';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RaceService {
  url: String = 'http://localhost:8080/api/races/';
  races: Array<Race>;
  constructor() {
    this.races = RACES;
  }

  getAllRaces(): Observable<Array<Race>> {
    return of(this.races);
  }

  addRace(race: Race): void {
    this.races.push(race);
  }
}
