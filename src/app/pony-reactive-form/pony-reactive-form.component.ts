import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PonyService } from '../pony.service';
import { Router } from '@angular/router';
import { Pony } from '../pony';

@Component({
  selector: 'app-pony-reactive-form',
  templateUrl: './pony-reactive-form.component.html',
  styleUrls: ['./pony-reactive-form.component.css']
})
export class PonyReactiveFormComponent implements OnInit {

  ponyForm = this.fb.group({
    name: ['nom', Validators.required],
    age: ['0', Validators.required],
    color: ['blanc', Validators.required],
    weight: ['0', Validators.required]
  });

  constructor(private fb: FormBuilder,
    private service: PonyService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    const p: Pony = this.ponyForm.value;
    this.service.addPony(p);
  }
}
