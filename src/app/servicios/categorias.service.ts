import { Injectable } from '@angular/core';
import {GLOBAL } from './global.service';
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { Categoria } from '../modelos/categoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
  public ruta: String;
  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(public _http: HttpClient) {
    this.ruta = GLOBAL.url;
   }

   agregarCategoria(categoria: Categoria): Observable<any>{
     let params = JSON.stringify(categoria);

     return this._http.post(this.ruta + 'agregarCategoria', params, {headers: this.headersVariable});
   }

   obtenerCategorias(): Observable<any>{
     return this._http.get(this.ruta + 'obtenerCategorias', {headers: this.headersVariable});
   }

   obtenerCategoriasID(id:String): Observable<any>{
     return this._http.get(this.ruta + 'obtenerCategoriasID/' + id, {headers: this.headersVariable});
   }

   editarCategoria(categoria: Categoria): Observable<any>{
     let params = JSON.stringify(categoria);

     return this._http.put(this.ruta + 'editarCategoria/' + categoria._id , params, {headers: this.headersVariable});
   }

   eliminarCategoria(id:String): Observable<any>{
     return this._http.delete(this.ruta + 'eliminarCategoria/' + id, {headers: this.headersVariable});
   }


}
