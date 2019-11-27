import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Laboratorio } from '../Modelo/Laboratorio';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  Url ='http://localhost:5050/princi'

  createLab(laboratorio:Laboratorio){
    return this.http.post<Laboratorio>(this.Url,laboratorio);
  }
}
