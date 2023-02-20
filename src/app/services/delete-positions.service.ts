import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeletePositionsService {
//url:string ="http://18.195.228.39:8080/";
url:string =  "http://localhost:8089/";
  constructor(private http: HttpClient) { }

  delete(obj:any){
    return this.http.post(this.url, obj);
  }
  
}
