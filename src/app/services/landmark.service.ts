import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Landmark } from '../Landmark';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LandmarkService {

  private apiUrl = 'https://firefighter-5325.instashop.ae/api/landmarks'
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http:HttpClient) { }

  getLandmarks(): Observable<Landmark[]> {
    return this.http.get<Landmark[]>(this.apiUrl)
    .pipe(
      tap(_ => console.log('fetched landmarks')))
  }

  getLandmarkById(objectid: String): Observable<Landmark> {
    const url = `${this.apiUrl}/${objectid}`;

    return this.http.get<Landmark>(url).pipe(
      tap(_ => console.log(`fetched landmark id=${objectid}`)),
    );
  }
}
