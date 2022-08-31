import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditEducacionComponent } from './components/educacion/edit-educacion/edit-educacion.component';
import { NewEducacionComponent } from './components/educacion/new-educacion/new-educacion.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia/new-experiencia.component';
import { EditHabilidadesComponent } from './components/habilidades/edit-habilidades/edit-habilidades.component';
import { NewHabilidadesComponent } from './components/habilidades/new-habilidades/new-habilidades.component';
import { HomeComponent } from './components/home/home.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { EditProyectoComponent } from './components/proyectos/edit-proyecto/edit-proyecto.component';
import { NewProyectoComponent } from './components/proyectos/new-proyecto/new-proyecto.component';


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginPageComponent},
  {path:'nuevaexp', component: NewExperienciaComponent},
  {path:'editexp/:id', component: EditExperienciaComponent},
  {path:'nuevaedu', component: NewEducacionComponent},
  {path:'editedu/:id', component: EditEducacionComponent},
  {path:'nuevopro', component: NewProyectoComponent},
  {path:'editpro/:id', component: EditProyectoComponent},
  {path:'nuevahabi', component: NewHabilidadesComponent},
  {path:'edithabi/:id', component: EditHabilidadesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
