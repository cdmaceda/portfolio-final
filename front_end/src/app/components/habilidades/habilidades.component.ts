import { Component, OnInit } from '@angular/core';
import { Habilidades } from 'src/app/model/habilidades';
import { HabilidadesService } from 'src/app/service/habilidades.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  habilidades: Habilidades[] = [];

  constructor(private habilidadesService: HabilidadesService, private tokenService: TokenService) { }
  isLogged = false; 

  ngOnInit(): void {
    this.cargarHabilidades();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  cargarHabilidades(): void{
    this.habilidadesService.lista().subscribe(data =>{
      this.habilidades = data;
    })
  }

  delete(id?: number){
    if(id != undefined){
      this.habilidadesService.delete(id).subscribe(data =>{
        alert("La habilidad ha sido eliminada correctamente");
        this.cargarHabilidades();
      }, err =>{
        alert("No se pudo eliminar el proyecto");
      })
    }
}
}