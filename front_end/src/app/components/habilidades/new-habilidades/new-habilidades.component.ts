import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Habilidades } from 'src/app/model/habilidades';
import { HabilidadesService } from 'src/app/service/habilidades.service';

@Component({
  selector: 'app-new-habilidades',
  templateUrl: './new-habilidades.component.html',
  styleUrls: ['./new-habilidades.component.css']
})
export class NewHabilidadesComponent implements OnInit {
  porcentajeH: number;
  descripcionH: string;
  

  constructor(private habilidadesService: HabilidadesService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const habilidades = new Habilidades(this.porcentajeH, this.descripcionH);
    this.habilidadesService.save(habilidades).subscribe(data =>{
      alert("Habilidad añadida correctamente");
      this.router.navigate(['']);
    }, err =>{
      alert("Fallo al añadir habilidad");
      this.router.navigate(['']);
    })
  }

}
