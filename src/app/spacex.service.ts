import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const BASE_URL = 'https://api.spacexdata.com/v3/launches';

@Injectable({
  providedIn: 'root'
})
export class SpacexService {
  constructor(private http: HttpClient) {}

  getAllLaunches(): Observable<any[]> {
    return this.http.get<any[]>(BASE_URL);
  }

  getLaunchesByYear(year: string): Observable<any[]> {
    return this.http.get<any[]>(`${BASE_URL}?launch_year=${year}`);
  }

  getLaunchByFlightNumber(id: string): Observable<any> {
    return this.http.get<any>(`${BASE_URL}/${id}`);
  }
}
