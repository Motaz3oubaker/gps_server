import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeletePositionsService {
url:string ="http://3.126.135.135:8080/";
  constructor(private http: HttpClient) { }

  delete(obj:any){
    return this.http.post(this.url, obj);
  }
  
}
