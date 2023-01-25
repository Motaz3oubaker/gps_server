import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http: HttpClient) { }


  GetAllPositions(){
    return this.http.get("http://3.126.135.135:8080/");
    // return this.http.get("http://localhost:8089/");
  }

}
