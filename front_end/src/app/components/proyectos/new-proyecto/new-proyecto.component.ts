import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit {
  nombreP: string;
  descripcionP: string;
  imagenP: string;

  constructor(private proyectoService: ProyectoService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const proyecto = new Proyecto(this.nombreP, this.descripcionP, this.imagenP);
    this.proyectoService.save(proyecto).subscribe(data =>{
      alert("Proyecto añadido correctamente");
      this.router.navigate(['']);
    }, err =>{
      alert("Fallo al añadir proyecto");
      this.router.navigate(['']);
    })
  }

}
