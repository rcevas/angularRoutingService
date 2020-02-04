import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IContact } from './interfaces';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private _url = '/assets/web-server/httpContacts.json';

  constructor(private http: HttpClient) { }

  getContacts() {
    return [
      {"id": 1, "name": "Rodrigo", "age": 38},
      {"id": 2, "name": "Marcos", "age": 25},
      {"id": 3, "name": "Pablo", "age": 42},
      {"id": 4, "name": "Olga", "age": 31}
    ];
  }

  getHttpContacts(): Observable<IContact[]> {
    return this.http.get<IContact[]>(this._url);
    //to handle errors in the local service
    /* .pipe(
        catchError(this.errorHandler)
      ); */
  }

  //to handle errors in the local service
  /* errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'server error');
  } */

}
