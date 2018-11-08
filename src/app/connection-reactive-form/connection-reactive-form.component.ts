import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-connection-reactive-form',
  templateUrl: './connection-reactive-form.component.html',
  styleUrls: ['./connection-reactive-form.component.css']
})
export class ConnectionReactiveFormComponent implements OnInit {
  connectForm = this.fb.group({
    login: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  onSubmit() {
    const u: User = this.connectForm.value;
    console.log(u.loging);
  }

}
