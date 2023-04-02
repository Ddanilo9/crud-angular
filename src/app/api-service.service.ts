import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  constructor(private _http: HttpClient) {}

  // connect frontend to backend

  apiUrl = 'http://localhost:3000/user';

  //get all data

  getAllData(): Observable<any> {
    return this._http.get(`${this.apiUrl}`);
  }

  //Create data

  createData(data: any): Observable<any> {
    console.log(data);
    return this._http.post(`${this.apiUrl}`, data);
  }

  //Delete data

  deleteData(id: any): Observable<any> {
    let ids = id;
    return this._http.delete(`${this.apiUrl}/${ids}`);
  }

  //Update data

  updateData(data: any, id: any): Observable<any> {
    let ids = id;
    return this._http.put(`${this.apiUrl}/${ids}`, data);
  }

  // Get single data

  getSingleData(id: any): Observable<any> {
    let ids = id;
    return this._http.get(`${this.apiUrl}/${ids}`);
  }
}
