import { Injectable } from '@angular/core';
import { GLOBAL } from './global.service';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from 'rxjs';
import { Usuario } from '../modelos/usuarioModel';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  public ruta: any;
  public token: any;
  public identidad: any;
  public localStorageVariable:any = localStorage.getItem('identidad');
  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(public _http: HttpClient) {
    this.ruta = GLOBAL.url;
   }

  login(usuario:any, getToken:any):Observable<any>{
    if(getToken != null){
      usuario.getToken = getToken;
    }
    let params = JSON.stringify(usuario);
    return this._http.post(this.ruta + 'login', params, {headers: this.headersVariable});
  }

  registro(usuario:Usuario): Observable<any>{
    let params = JSON.stringify(usuario);
    return this._http.post(this.ruta + 'Registrar', params, {headers: this.headersVariable})

  }

  ObtenerUsuarios(): Observable<any>{
    return this._http.get(this.ruta + 'ObtenerUsuarios', {headers: this.headersVariable})

  }
  ObtenerUsuarioID(id:String):Observable<any>{
    return this._http.get(this.ruta + 'ObtenerUsuarioID/' + id, {headers: this.headersVariable})

  }

  obtenerToken(){
    var token2 = localStorage.getItem('token');
    if(token2 != 'undefined'){
      this.token = token2;
    }else{
      this.token = null;
    }
    return this.token;
  }
  obtenerIdentidad(){
    var identidad2 = JSON.parse(this.localStorageVariable);
    if(identidad2 != 'undefined'){
      this.identidad = identidad2;
    }else{
      this.identidad = null;
    }
    return this.identidad;
  }

}
