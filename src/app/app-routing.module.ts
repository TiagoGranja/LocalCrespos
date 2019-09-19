import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuInicialComponent } from './menu-inicial/menu-inicial.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { OQueVisitarComponent } from './o-que-visitar/o-que-visitar.component';
import { OQueFazerComponent } from './o-que-fazer/o-que-fazer.component';
import { ServicosComponent } from './servicos/servicos.component';
import { ContactosComponent } from './contactos/contactos.component';
import { HomeComponent } from './home/home.component';
import { MissaoComponent } from './missao/missao.component';
import { ValoresComponent } from './valores/valores.component';
import { EquipaComponent } from './equipa/equipa.component';


const routes: Routes = [
 {path: '', redirectTo: '/home', pathMatch: 'full'},
 {path: 'home', component: HomeComponent},
 {path: 'quemSomos',
 component: QuemSomosComponent,
 children: [
   {path: '', redirectTo: 'missao', pathMatch: 'full'},
   {path: 'missao', component: MissaoComponent},
   {path: 'valores', component: ValoresComponent},
   {path: 'equipa', component: EquipaComponent},
   {path: '**', redirectTo: 'missao', pathMatch: 'full'}
 ]
},
 {path: 'oQueVisitar', component: OQueVisitarComponent},
 {path: 'oQueFazer', component: OQueFazerComponent},
 {path: 'servicos', component: ServicosComponent},
 {path: 'contactos', component: ContactosComponent},
 {path: '**', redirectTo: 'home', pathMatch: 'full'}//tem que vir no final
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
