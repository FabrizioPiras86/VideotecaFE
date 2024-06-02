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
import { PrefilmComponent } from './component/Film/prefilm/prefilm.component';
import { FilmcreaComponent } from './component/Film/filmcrea/filmcrea.component';
import { SearchComponent } from './component/Film/search/search.component';
import { ModificafilmComponent } from './component/Film/modificafilm/modificafilm.component';
import { AggiungiComponent } from './component/Film/aggiungi/aggiungi.component';
import { ModificaGenereComponent } from './component/Film/modifica-genere/modifica-genere.component';
import { CancellaComponent } from './component/Film/cancella/cancella.component';
import { RegistrazioneComponent } from './component/Utenti/registrazione/registrazione.component';
import { ModificapersonaleComponent } from './component/Utenti/modificapersonale/modificapersonale.component';
import { HomedashboardComponent } from './component/Dashboard/homedashboard/homedashboard.component';
import { ClientidashboardComponent } from './component/Dashboard/clientidashboard/clientidashboard.component';
import { PrivacyPolicyComponent } from './component/BaseOfProject/privacy-policy/privacy-policy.component';
import { TermsOfServiceComponent } from './component/BaseOfProject/terms-of-service/terms-of-service.component';
import { ContactFormComponent } from './component/BaseOfProject/contact-form/contact-form.component';



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
  { path: "prefilm", component: PrefilmComponent, canActivate: [RouteGuardServiceService]},
  { path: "filmcrea", component: FilmcreaComponent, canActivate: [RouteGuardServiceService]},
  { path: "search", component: SearchComponent, canActivate: [RouteGuardServiceService]},
  { path: "modificafilm", component: ModificafilmComponent, canActivate: [RouteGuardServiceService]},
  { path: "aggiungi", component: AggiungiComponent, canActivate: [RouteGuardServiceService]},
  { path: "modificagenere", component: ModificaGenereComponent, canActivate:[RouteGuardServiceService]},
  { path: "cancella", component: CancellaComponent, canActivate: [RouteGuardServiceService]},
  { path: "registrazione", component: RegistrazioneComponent},
  { path: "modificapersonale", component: ModificapersonaleComponent, canActivate: [RouteGuardServiceService]},
  { path: "homedashboard", component: HomedashboardComponent, canActivate: [RouteGuardServiceService]},
  { path: "clientidashboard", component: ClientidashboardComponent,canActivate: [RouteGuardServiceService]},
  { path: "privacy", component: PrivacyPolicyComponent},
  { path: "terms", component: TermsOfServiceComponent},
  { path: "contact", component: ContactFormComponent},
  { path: "logout", component: LogoutComponent },
  { path: "**", component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
