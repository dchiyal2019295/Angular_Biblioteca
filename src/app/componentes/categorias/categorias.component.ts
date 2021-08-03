import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/modelos/categoria.model';
import { CategoriasService } from 'src/app/servicios/categorias.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss'],
  providers: [CategoriasService]
})
export class CategoriasComponent implements OnInit {
  public categoList:any;
  public categoriaIDModel: Categoria;
  constructor(private _categoriaService: CategoriasService) {
    this.categoriaIDModel = new Categoria(
      "",
      "",
      [{ descripcion: '', imagen: ''}]
    );
   }

  ngOnInit(): void {
    this.obtenerCategorias();
  }


  agregarCategoria(){
    this._categoriaService.agregarCategoria(this.categoriaIDModel).subscribe(
      (response) => {
        console.log(response);
        this.obtenerCategorias();
      }
    )
  }

  obtenerCategorias(){
    this._categoriaService.obtenerCategorias().subscribe(
      response => {
        console.log(response.categorias);
        this.categoList = response.categorias;
      }
    )
  }

  obtenerCategoriasID(id:any){
    this._categoriaService.obtenerCategoriasID(id).subscribe(
      response => {
        this.categoriaIDModel = response.categoriaEncontrada;
        console.log(response.categoriaEncontrada);
      }
    )
  }

  editarCategoria(){
    this._categoriaService.editarCategoria(this.categoriaIDModel).subscribe(
      response => {
        console.log(response);
        this.obtenerCategorias();
      }
    )
  }

  eliminarCategoria(id:any){
    this._categoriaService.eliminarCategoria(id).subscribe(
      response => {
        console.log(response);
        this.obtenerCategorias();
      }
    )
  }

}
