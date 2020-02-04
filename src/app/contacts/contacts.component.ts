import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  public contacts = [];

 
  constructor(private _contactService: ContactService) { }

  ngOnInit() {
    this.contacts = this._contactService.getContacts();
  }

}
