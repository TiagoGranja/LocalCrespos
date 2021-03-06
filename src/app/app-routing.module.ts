import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuInicialComponent } from './menu-inicial/menu-inicial.component';
import { OQueVisitarComponent } from './o-que-visitar/o-que-visitar.component';
import { OQueFazerComponent } from './o-que-fazer/o-que-fazer.component';
import { ServicosComponent } from './servicos/servicos.component';
import { ContactosComponent } from './contactos/contactos.component';
import { HomeComponent } from './home/home.component';
import { TempoComponent } from './tempo/tempo.component';
import { MissaoComponent } from './missao/missao.component';
import { ValoresComponent } from './valores/valores.component';
import { EquipaComponent } from './equipa/equipa.component';
import { FooterComponent } from './footer/footer.component';
import { PoliticaComponent } from './footer/politica/politica.component';
import { PerguntasComponent } from './footer/perguntas/perguntas.component';
import { TermosComponent } from './footer/termos/termos.component';
import { ReservasComponent } from './reservas/reservas.component';
import { ListaQuartosComponent } from './reservas/lista-quartos/lista-quartos.component';

const routes: Routes = [
 {path: '', redirectTo: '/home', pathMatch: 'full'},
 {path: 'home', component: HomeComponent},
 {path: 'missao', component: MissaoComponent},
 {path: 'valores', component: ValoresComponent},
 {path: 'equipa', component: EquipaComponent},
 {path: 'oQueVisitar', component: OQueVisitarComponent},
 {path: 'oQueFazer', component: OQueFazerComponent},
 {path: 'servicos', component: ServicosComponent},
 {path: 'contactos', component: ContactosComponent},
 {path: 'tempo', component: TempoComponent},
 {path: 'footer', component: FooterComponent},
 {path: 'politica', component: PoliticaComponent},
 {path: 'perguntas', component: PerguntasComponent},
 {path: 'termos', component: TermosComponent},
 {path: 'reservas', component: ReservasComponent},
 {path: 'listaQuartos', component: ListaQuartosComponent},

 {path: '**', redirectTo: 'home', pathMatch: 'full'}// tem que vir no final
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled', // envia os links para o topo da página
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
