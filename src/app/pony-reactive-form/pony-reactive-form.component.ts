import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PonyService } from '../pony.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Pony } from '../pony';

@Component({
  selector: 'app-pony-reactive-form',
  templateUrl: './pony-reactive-form.component.html',
  styleUrls: ['./pony-reactive-form.component.css']
})
export class PonyReactiveFormComponent implements OnInit {
  idPony: number;
  ponyForm = this.fb.group({
    name: ['nom', Validators.required],
    age: ['0', Validators.required],
    color: ['blanc', Validators.required],
    weight: ['0', Validators.required]
  });
  add: boolean;

  constructor(private fb: FormBuilder,
    private service: PonyService,
    private route: ActivatedRoute
  ) {
    this.add = true;
  }

  ngOnInit() {
    if (this.route.snapshot.paramMap.get('id') === null) {
      this.add = true;
    } else {
      this.add = false;
      const id = parseInt(this.route.snapshot.paramMap.get('id'), 0);
      this.idPony = id;
      this.service.getPony(id).subscribe(p => this.ponyForm.setValue({
        name: p.name,
        age: p.age,
        color: p.color,
        weight: p.weight
      }));
    }
  }

  onSubmit() {
    const p: Pony = this.ponyForm.value;
    if (this.add) {
      this.service.addPony(p);
    } else {
      this.service.updatePony(this.idPony, p);
    }
  }
}
