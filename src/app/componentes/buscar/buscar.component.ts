import { Component, OnInit } from '@angular/core';
import { Busqueda } from 'src/app/modelos/busqueda.model';
import { BuscarService } from 'src/app/servicios/buscar.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.scss']
})
export class BuscarComponent implements OnInit {
  public categoList:any;
  public busquedaModel: Busqueda
  constructor(private _busquedaService: BuscarService) {
    this.busquedaModel = new Busqueda("","");
   }

  ngOnInit(): void {
  }

  obtenerCategorias(){
    this._busquedaService.obtenerCategorias().subscribe(
      response => {
        console.log(response.categorias);
        this.categoList = response.categorias;
      }
    )
  }

  obtenerCategoriasID(id:any){
    this._busquedaService.obtenerCategoriasID(id).subscribe(
      response => {
        this.busquedaModel = response.categoriaEncontrada;
        console.log(response.categoriaEncontrada);
      }
    )
  }

  obtenerCategoriaNombre(categoria:any){
    this._busquedaService.obtenerCategoriaNombre(categoria).subscribe(
      response => {
        console.log(response);
        this.obtenerCategoriasID(categoria)
      }
    )
  }



}
