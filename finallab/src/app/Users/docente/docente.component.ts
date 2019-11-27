import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-docente',
  templateUrl: './docente.component.html',
  styleUrls: ['./docente.component.css']
})
export class DocenteComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
     
  }

  Salaa(){
    this.router.navigate(["lab"])
  }

}
