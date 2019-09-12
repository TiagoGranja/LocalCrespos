import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuInicialComponent } from './menu-inicial/menu-inicial.component';
import { CarrocelComponent } from './carrocel/carrocel.component';
import { ReservasComponent } from './reservas/reservas.component';
import { MapaComponent } from './mapa/mapa.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { OQueVisitarComponent } from './o-que-visitar/o-que-visitar.component';
import { OQueFazerComponent } from './o-que-fazer/o-que-fazer.component';
import { ServicosComponent } from './servicos/servicos.component';
import { ContactosComponent } from './contactos/contactos.component';
import { HomeComponent } from './home/home.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MenuInicialComponent,
    CarrocelComponent,
    ReservasComponent,
    MapaComponent,
    QuemSomosComponent,
    OQueVisitarComponent,
    OQueFazerComponent,
    ServicosComponent,
    ContactosComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
