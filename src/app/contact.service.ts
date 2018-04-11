import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { Contact } from './contact'
import { Observable } from 'rxjs/Observable';

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };

@Injectable()
export class ConfigService {

 contactUrl = 'assets/contact.json';
  constructor(private httpClient: HttpClient) { }
  

  addContact(contact: Contact): Observable<Contact> {

   return this.httpClient.post<Contact>(this.contactUrl, contact, httpOptions)

  }

 }
