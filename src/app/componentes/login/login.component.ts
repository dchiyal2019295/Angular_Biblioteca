import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { Usuario } from 'src/app/modelos/usuarioModel';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
   providers: [UsuarioService]
})
export class LoginComponent implements OnInit {

  public usuarioModel!: Usuario;
  public token!: any;
  public identidad!:any;
  constructor(private _usuarioService: UsuarioService, private _router: Router) {
    this.usuarioModel = new Usuario("","","","","","","");
   }
  
  ngOnInit(): void {
  }

  ObtenerToken(){
    this._usuarioService.login(this.usuarioModel, 'true').subscribe(
      response=>{
        this.token = response.token;
        localStorage.setItem('token', this.token);
      },
      error => {
        console.log(<any>error);
      })
  }
  login(){
    this._usuarioService.login(this.usuarioModel, 'false').subscribe(
      response=>{
        console.log(response)
        this.identidad = response.usuarioEncontrado;
        localStorage.setItem('identidad', JSON.stringify(this.identidad));
        this.ObtenerToken();
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Usuario Correcto',
          showConfirmButton: false,
          timer: 1500
        })
        this._router.navigate(['/inicio'])
      },
      error =>{
        console.log(<any>error);
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: error.error.mensaje,
          showConfirmButton: false,
          timer: 1500
        })
      }
    )
  }
}
