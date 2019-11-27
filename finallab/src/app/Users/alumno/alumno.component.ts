import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }


  Sala(){
    this.router.navigate(["lab"])
  }

}
