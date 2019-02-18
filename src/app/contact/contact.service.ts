import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { Contact } from './contact';
import { Observable } from 'rxjs';

export const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private serviceUrl = '/contacts';
  private apiService: string;

  constructor(private http: HttpClient) {
    this.apiService = environment.api + this.serviceUrl;
  }

  getAll(): Observable<Array<Contact>> {
    return this.http.get<Array<Contact>>(this.apiService);
  }

  delete(contact): Observable<Contact> {
    const { id } = contact;
    return this.http.delete<Contact>(`${this.apiService}/${id}`);
  }

  create(contact): Observable<Contact> {
    return this.http.post<Contact>(`${this.apiService}`, contact, httpOptions);
  }

  update(contact): Observable<Contact> {
    return this.http.put<Contact>(
      `${this.apiService}/${contact.id}`,
      contact,
      httpOptions
    );
  }
}
