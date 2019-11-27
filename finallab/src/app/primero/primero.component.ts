import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../Service/service.service';
import { Laboratorio } from '../Modelo/Laboratorio';

@Component({
  selector: 'app-primero',
  templateUrl: './primero.component.html',
  styleUrls: ['./primero.component.css']
})
export class PrimeroComponent implements OnInit {

  laboratorio: Laboratorio = new Laboratorio();
  constructor(private router:Router,private service:ServiceService) { }

  ngOnInit() {
  }


  Guardar(){
    this.service.createLab(this.laboratorio)
    .subscribe(data =>{
      alert("Se agrego con exito")
      this.router.navigate(["lab"])
    })
  }

}
