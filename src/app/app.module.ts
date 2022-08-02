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
    ProyectosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
