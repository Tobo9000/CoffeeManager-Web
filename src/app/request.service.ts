import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',  
  })
};

@Injectable({
  providedIn: 'root'
})

export class RequestService {

 

  constructor(private http: HttpClient) { }



  get(url: string): Observable<any>{
    return this.http.get(environment.apiEndpoint + url);
  }

  post(url: string, body: any): Observable<any> {
    return this.http.post(environment.apiEndpoint + url, body, httpOptions);
  }

  delete(url: string): Observable<any> {
    return this.http.delete(environment.apiEndpoint + url, httpOptions);
  }

}




