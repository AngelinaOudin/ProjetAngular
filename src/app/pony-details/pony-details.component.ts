import { Component, OnInit, Input } from '@angular/core';
import { Pony } from './../pony';
@Component({
  selector: 'app-pony-details',
  templateUrl: './pony-details.component.html',
  styleUrls: ['./pony-details.component.css']
})
export class PonyDetailsComponent implements OnInit {
  @Input() pony: Pony;

  // Appelé une fois
  constructor() {
    // this.pony = new Pony('Rainbow Dash', 6, 10, 'Bleu');
  }

  // Appelé à chaque rafraichissement
  ngOnInit() {
  }

}
