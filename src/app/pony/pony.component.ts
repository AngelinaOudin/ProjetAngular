import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pony } from '../pony';
import { PonyService } from '../pony.service';

@Component({
  selector: 'app-pony',
  templateUrl: './pony.component.html',
  styleUrls: ['./pony.component.css']
})
export class PonyComponent implements OnInit {

  pony: Pony;
  constructor(private route: ActivatedRoute,
    private service: PonyService) {
      this.pony = new Pony();
   }

  ngOnInit() {
    const id: number = parseInt(this.route.snapshot.paramMap.get('id'), 0);
    this.service.getPony(id).subscribe(p => this.pony = p);
  }

}
