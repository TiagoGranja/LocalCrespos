import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

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
import { MissaoComponent } from './missao/missao.component';
import { ValoresComponent } from './valores/valores.component';
import { EquipaComponent } from './equipa/equipa.component';
import { TempoComponent } from './tempo/tempo.component';
import { FooterComponent } from './footer/footer.component';
import { PerguntasComponent } from './footer/perguntas/perguntas.component';
import { TermosComponent } from './footer/termos/termos.component';
import { PoliticaComponent } from './footer/politica/politica.component';

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
    HomeComponent,
    MissaoComponent,
    ValoresComponent,
    EquipaComponent,
    TempoComponent,
    FooterComponent,
    PerguntasComponent,
    TermosComponent,
    PoliticaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
