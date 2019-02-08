import { Injectable } from '@angular/core';
import * as jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  setSession(token: string) {
    try {
      const decoded = jwt_decode(token)
      localStorage.setItem("token", JSON.stringify(token));
      localStorage.setItem("user", JSON.stringify(decoded));
    } catch(Error) {
      console.log("Fehlerhaftes Token")
    }
  }

  isAuthenticated(): boolean{
    if(JSON.parse(localStorage.getItem("user")).exp > new Date()){
        return true;
    }
    else{
      return false;
    }
  }

}
