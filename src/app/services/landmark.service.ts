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
    headers: new HttpHeaders({ 'Content-Type': 'application/json' , 'x-sessionToken': this.getSessionToken()})
  };

  constructor(private http:HttpClient) { }

  getLandmarks(): Observable<Landmark[]> {
    return this.http.get<Landmark[]>(this.apiUrl)
    .pipe(
      tap(_ => console.log('fetched landmarks')))
  }

  getLandmarkById(objectId: String): Observable<Landmark> {
    const url = `${this.apiUrl}/${objectId}`;
    return this.http.get<Landmark>(url).pipe(
      tap(_ => console.log(`fetched landmark id=${objectId}`)),
    );
  }

  getSessionToken() {
    const token = localStorage.getItem('sessionToken');
    if (token) {
      return token;
    }
    else
      return "";
  }

  updateLandmark(landmark: any, objectId: String): Observable<any> {
    //console.log("##########") Used for debugging
    const url = `${this.apiUrl}/${objectId}`;
    return this.http.put(url, landmark, this.httpOptions).pipe(
      tap(_ => console.log(`updated landmark id=${landmark.title}`))
    );
  }
}
