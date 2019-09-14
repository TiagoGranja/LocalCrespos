import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})
export class ContactosComponent implements OnInit {
  name: string;
  email: string;
  subject: string;
  message: string;

  constructor() { }

  ngOnInit() {}

  processForm() {
    const allInfo = `My name is ${this.name}. My email is ${this.email}. My subject is ${this.subject}. My message is ${this.message}`;
    alert(allInfo);
  }

}
