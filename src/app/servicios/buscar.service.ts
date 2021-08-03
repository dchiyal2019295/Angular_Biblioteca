import { Injectable } from '@angular/core';
import { GLOBAL } from './global.service';
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { Busqueda } from "../modelos/busqueda.model";


@Injectable({
  providedIn: 'root'
})
export class BuscarService {
  public ruta: String;
  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(public _http: HttpClient) {
    this.ruta = GLOBAL.url;
   }

   obtenerCategorias(): Observable<any>{
     return this._http.get(this.ruta + 'obtenerCategorias', {headers: this.headersVariable});
   }

    obtenerCategoriasID(id:String): Observable<any>{
     return this._http.get(this.ruta + 'obtenerCategoriasID/' + id, {headers: this.headersVariable});
   }

   obtenerCategoriaNombre(categoria: Busqueda): Observable<any>{
    return this._http.get(this.ruta + 'obtenerCategoriaNombre' + categoria, {headers: this.headersVariable});
  }

}
