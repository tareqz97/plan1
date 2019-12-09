import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

interface AuthResponseData {
  kind: string;
  idToken: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;

}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  signUp(email:string,password:string){
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBM6b66WJmALxMxCjnkT1IKbPKvspHd6Hw',
      {
        email:email,
        password:password,
        returnSecureToken:true
      }
    );
  }
}
