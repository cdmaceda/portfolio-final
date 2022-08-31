import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoApComponent } from './components/header/logo-ap/logo-ap.component';
import { LogoRedesComponent } from './components/header/logo-redes/logo-redes.component';
import { BannerComponent } from './components/header/banner/banner.component';
import { LoginComponent } from './components/header/login/login.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { InformacionComponent } from './components/acerca-de/informacion/informacion.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { FooterComponent } from './components/footer/footer.component';
import {HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { FormsModule } from '@angular/forms';
import { interceptorProvider } from './service/interceptor-service';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia/edit-experiencia.component';
import { NewEducacionComponent } from './components/educacion/new-educacion/new-educacion.component';
import { EditEducacionComponent } from './components/educacion/edit-educacion/edit-educacion.component';
import { NewProyectoComponent } from './components/proyectos/new-proyecto/new-proyecto.component';
import { EditProyectoComponent } from './components/proyectos/edit-proyecto/edit-proyecto.component';
import { NewHabilidadesComponent } from './components/habilidades/new-habilidades/new-habilidades.component';
import { EditHabilidadesComponent } from './components/habilidades/edit-habilidades/edit-habilidades.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoApComponent,
    LogoRedesComponent,
    BannerComponent,
    LoginComponent,
    AcercaDeComponent,
    InformacionComponent,
    ExperienciaComponent,
    EducacionComponent,
    HabilidadesComponent,
    ProyectosComponent,
    FooterComponent,
    HomeComponent,
    LoginPageComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NewEducacionComponent,
    EditEducacionComponent,
    NewProyectoComponent,
    EditProyectoComponent,
    NewHabilidadesComponent,
    EditHabilidadesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    FormsModule
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
