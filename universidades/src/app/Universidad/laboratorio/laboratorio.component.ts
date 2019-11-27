import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Laboratorio } from 'src/app/Modelos/Laboratorio';

@Component({
  selector: 'app-laboratorio',
  templateUrl: './laboratorio.component.html',
  styleUrls: ['./laboratorio.component.css']
})
export class LaboratorioComponent implements OnInit {
  laboratorio: Laboratorio=new Laboratorio();

  constructor(private router:Router,private service:ServiceService) { }

  ngOnInit() {
  }


    Guardarl(laboratorio:Laboratorio){
        this.service.createLaboratorio(this.laboratorio)
        .subscribe(data =>{
          alert("Se agrego exitosamente")
        })
    }
}
