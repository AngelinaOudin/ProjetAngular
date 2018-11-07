import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PonyService } from '../pony.service';
import { Pony } from '../pony';

@Component({
  selector: 'app-delete-pony',
  templateUrl: './delete-pony.component.html',
  styleUrls: ['./delete-pony.component.css']
})
export class DeletePonyComponent implements OnInit {
  constructor(private route: ActivatedRoute,
    private service: PonyService, private router: Router) {
    }

  ngOnInit() {
    const id: number = parseInt(this.route.snapshot.paramMap.get('id'), 0);
    this.service.deletePony(id);
    this.router.navigate(['/Ponies']);
  }

}
