import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3000/contacts';

  constructor(private http: HttpClient) {
  }

  addContact(contact: any): Observable<any> {
    return this.http.post(this.apiUrl, contact);
  }

  getAllContacts(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
