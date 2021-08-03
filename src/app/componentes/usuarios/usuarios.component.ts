import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/modelos/usuarioModel';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss'],
  providers: [UsuarioService]
})
export class UsuariosComponent implements OnInit {
  public usuarioList:any;
  public usuarioIdModel: Usuario;

  constructor(private _usuarioService: UsuarioService) { 
    this.usuarioIdModel = new Usuario("","","","","","","");
  }

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  obtenerUsuarios(){
    this._usuarioService.ObtenerUsuarios().subscribe(response=>{
      console.log(response.usuariosEncontrados)
      this.usuarioList = response.usuariosEncontrados;

    }, error=>{
      console.log(<any> error)
    }

    )

  }
  obtenerUsuarioId(id:any){
    this._usuarioService.ObtenerUsuarioID(id).subscribe(
      response=>{
        this.usuarioIdModel = response.usuarioEnontrado;
        console.log(response.usuarioEnontrado)
      }
    )
  }

}
