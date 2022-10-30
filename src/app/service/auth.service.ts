import { Injectable } from '@angular/core';
import { NuevoUsuario } from '../model/nuevo-usuario';
import {HttpClientModule,HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginUsuario } from '../model/login-usuario';
import { JwtDto } from '../model/jwt-dto';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //auhtURL = 'http://localhost:8080/auth/';
  auhtURL = environment.URL + 'auth/';

  constructor(private httpClient:HttpClient) { }

  public nuevo(nuevoUsuario: NuevoUsuario): Observable<any>
  {
    return this.httpClient.post<any>(this.auhtURL + 'nuevo ',nuevoUsuario);
  }
  
  public login(loginUsuario : LoginUsuario) : Observable<JwtDto>
  {
    return this.httpClient.post<JwtDto>(this.auhtURL + 'login' , loginUsuario);
  }

}
