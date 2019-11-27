import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AuxiliarComponent } from './Users/auxiliar/auxiliar.component';
import { DocenteComponent } from './Users/docente/docente.component';
import { AlumnoComponent } from './Users/alumno/alumno.component';
import { SolicitudComponent } from './solicitud/solicitud.component';

const routes: Routes = [

  {path: 'auxiliar', component: AuxiliarComponent},
  {path: 'docente', component: DocenteComponent},
  {path: 'alumno', component: AlumnoComponent},
  {path: 'lab', component: SolicitudComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
