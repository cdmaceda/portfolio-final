import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Habilidades } from 'src/app/model/habilidades';
import { HabilidadesService } from 'src/app/service/habilidades.service';

@Component({
  selector: 'app-edit-habilidades',
  templateUrl: './edit-habilidades.component.html',
  styleUrls: ['./edit-habilidades.component.css']
})
export class EditHabilidadesComponent implements OnInit {
  habilidades: Habilidades = null; 

  constructor(private habilidadesService: HabilidadesService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.habilidadesService.detail(id).subscribe(data =>{
      this.habilidades = data;
    }, err =>{
      alert("Error al modificar"),
      this.router.navigate([''])
    })
  }
  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.habilidadesService.update(id, this.habilidades).subscribe(data =>{
      alert("Habilidad editada correctamente");
      this.router.navigate(['']);
    }, err =>{
      alert("Error al editar la habilidad");
      this.router.navigate(['']);
    })
  }

}
