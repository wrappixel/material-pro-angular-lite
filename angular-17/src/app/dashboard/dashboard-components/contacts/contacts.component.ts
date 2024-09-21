import { Component, OnInit } from '@angular/core';
import { Contact, contacts } from './contact-data';
import { DemoMaterialModule } from 'src/app/demo-material-module';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [DemoMaterialModule, NgFor],
  templateUrl: './contacts.component.html'
})
export class ContactsComponent implements OnInit {

  contactsData: Contact[];

  constructor() {

    this.contactsData = contacts;
  }

  ngOnInit(): void {
  }

}
