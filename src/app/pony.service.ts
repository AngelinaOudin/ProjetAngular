import { Injectable } from '@angular/core';
import { Pony } from './pony';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PonyService {
  url: String = 'http://localhost:8080/api/ponies';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  };

  constructor(private http: HttpClient, private router: Router) {
  }

  getAllPonies(): Observable<Array<Pony>> {
    return this.http.get<Array<Pony>>(this.url + '/', this.httpOptions);
  }

  addPony(pony: Pony): void {
    // this.ponies.push(pony);
    this.http.post<Array<Pony>>(this.url + '/', pony, this.httpOptions)
      .subscribe(() => this.router.navigate(['/Ponies']));
  }
}
