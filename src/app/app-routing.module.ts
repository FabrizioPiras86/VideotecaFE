import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './component/BaseOfProject/login/login.component';
import { WelcomeComponent } from './component/BaseOfProject/welcome/welcome.component';
import { ErrorComponent } from './component/BaseOfProject/error/error.component';
import { ListaFilmComponent } from './component/Film/listaFilm/ListaFilm.component';
import { RouteGuardServiceService } from './services/route-guard-service.service';
import { LogoutComponent } from './component/BaseOfProject/logout/logout.component';
import { ListaInterpretiComponent } from './component/Interpreti/listaInterpreti/ListaInterpreti.component';
import { HomeComponent } from './component/BaseOfProject/home/home.component';
import { PregenereComponent } from './component/Generi/pregenere/pregenere.component';
import { ListaGeneriComponent } from './component/Generi/listaGeneri/ListaGeneri.component';
import { GenerericercaperidComponent } from './component/Generi/generericercaperid/generericercaperid.component';
import { GeneriricercaperdescrizioneComponent } from './component/Generi/generericercaperdescrizione/generericercaperdescrizione.component';
import { GenerecreaComponent } from './component/Generi/genererecrea/genererecrea.component';
import { PreinterpreteComponent } from './component/Interpreti/preinterprete/preinterprete.component';
import { InterpretiricercaperidComponent } from './component/Interpreti/interpretiricercaperid/interpretiricercaperid.component';
import { InterpretiricercapernomeocognomeComponent } from './component/Interpreti/interpretiricercapernomeocognome/interpretiricercapernomeocognome.component';
import { InterpreticreaComponent } from './component/Interpreti/interpreticrea/interpreticrea.component';


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent},
  { path: "Pregeneri", component: PregenereComponent , canActivate:[RouteGuardServiceService]},
  { path: "generericercaperdescrizione", component: GeneriricercaperdescrizioneComponent, canActivate:[RouteGuardServiceService]},
  { path: "login", component: LoginComponent },
  { path: "welcome/:userId", component: WelcomeComponent, canActivate:[RouteGuardServiceService] },
  { path: "ListaFilm", component: ListaFilmComponent, canActivate:[RouteGuardServiceService] },
  { path: "ListaGeneri", component: ListaGeneriComponent, canActivate:[RouteGuardServiceService]},
  { path: "ListaInterpreti", component: ListaInterpretiComponent, canActivate:[RouteGuardServiceService]},
  { path: "generericercaperid", component: GenerericercaperidComponent, canActivate:[RouteGuardServiceService]},
  { path: "generecrea", component: GenerecreaComponent, canActivate:[RouteGuardServiceService]},
  { path: "preinterprete", component: PreinterpreteComponent, canActivate:[RouteGuardServiceService]},
  { path: "interpretiricercaperid", component: InterpretiricercaperidComponent, canActivate:[RouteGuardServiceService]},
  { path: "interpretiricercapernomeocognome", component: InterpretiricercapernomeocognomeComponent, canActivate: [RouteGuardServiceService]},
  { path: "interpreticrea", component: InterpreticreaComponent, canActivate: [RouteGuardServiceService]},
  { path: "logout", component: LogoutComponent },
  { path: "**", component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
