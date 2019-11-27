import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import {map,startWith} from 'rxjs/operators';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Router } from '@angular/router';
import { AuxiliarComponent } from './Users/auxiliar/auxiliar.component';
import { DocenteComponent } from './Users/docente/docente.component';
import { AlumnoComponent } from './Users/alumno/alumno.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router:Router){}
  Ingresar(){
    this.router.navigate(["docente"]);
  }

}

