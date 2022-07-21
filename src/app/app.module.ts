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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoApComponent,
    LogoRedesComponent,
    BannerComponent,
    LoginComponent,
    AcercaDeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
