import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarComponent } from './componentes/buscar/buscar.component';
import { CategoriasComponent } from './componentes/categorias/categorias.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';

const routes: Routes = [
{path: 'login', component: LoginComponent},
{path: 'registro', component: RegistroComponent},
{path: 'usuarios', component: UsuariosComponent},
{path: 'buscador', component: BuscarComponent},
{path: 'categoria', component: CategoriasComponent},
{path: 'inicio', component: InicioComponent},
{path: '**', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
