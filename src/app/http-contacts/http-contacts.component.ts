import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';




@Component({
  selector: 'app-http-contacts',
  templateUrl: './http-contacts.component.html',
  styleUrls: ['./http-contacts.component.css']
})
export class HttpContactsComponent implements OnInit {

  public HttpContacts = [];
  public errorMsg = [];

  constructor(private _httpContactService: ContactService) { }

  ngOnInit() {
    this._httpContactService.getHttpContacts()
    .subscribe(
      data => this.HttpContacts = data,
      error => this.errorMsg = error
      );
  }
}
