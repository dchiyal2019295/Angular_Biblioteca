import { Component, OnInit } from '@angular/core';
import { GLOBAL } from 'src/app/servicios/global.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [UsuarioService]
})
export class NavbarComponent implements OnInit {
  public identidad:any;
  public url:any;

  constructor(public _usuarioService: UsuarioService ) { 
    this.identidad = this._usuarioService.obtenerIdentidad();
    this.url = GLOBAL.url;
  }

  ngOnInit(): void {
    console.log(this.identidad);
  }

}
