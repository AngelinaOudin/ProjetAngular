import { Injectable } from '@angular/core';
import { Race } from './race';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RaceService {
  url: String = 'http://localhost:8080/api/races';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  };
  constructor(private http: HttpClient, private router: Router) {
  }

  getAllRaces(): Observable<Array<Race>> {
    return this.http.get<Array<Race>>(this.url + '/', this.httpOptions);
  }

  addRace(race: Race): void {
    this.http.post<Array<Race>>(this.url + '/', race, this.httpOptions)
      .subscribe(() => this.router.navigate(['/']));
  }

  getRace(id: number): Observable<Race> {
    return this.http.get<Race>(this.url + '/' + id, this.httpOptions);
  }

  updateRace(id: number, race: Race) {
    this.http.put(this.url + '/' + id, race, this.httpOptions)
      .subscribe(() => this.router.navigate(['/']));
  }

  deleteRace(id: number) {
    this.http.delete(this.url + '/' + id, this.httpOptions);
  }
}
