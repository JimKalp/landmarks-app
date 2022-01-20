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
  
  constructor(private http:HttpClient) { }

  getLandmarks(): Observable<Landmark[]> {
    console.log("********")
    return this.http.get<Landmark[]>(this.apiUrl).pipe(tap(_ => console.log('fetched heroes')))
  }
}
