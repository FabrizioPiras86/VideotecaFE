import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { ErrorComponent } from './component/BaseOfProject/error/error.component';
import { FooterComponent } from './component/BaseOfProject/footer/footer.component';
import { HomeComponent } from './component/BaseOfProject/home/home.component';
import { JumbotronComponent } from './component/BaseOfProject/jumbotron/jumbotron.component';
import { LoginComponent } from './component/BaseOfProject/login/login.component';
import { LogoutComponent } from './component/BaseOfProject/logout/logout.component';
import { NavigationBarComponent } from './component/BaseOfProject/navigation-bar/navigation-bar.component';
import { WelcomeComponent } from './component/BaseOfProject/welcome/welcome.component';
import { ListaFilmComponent } from './component/Film/listaFilm/ListaFilm.component';
import { GenerericercaperidComponent } from './component/Generi/generericercaperid/generericercaperid.component';
import { ListaGeneriComponent } from './component/Generi/listaGeneri/ListaGeneri.component';
import { PregenereComponent } from './component/Generi/pregenere/pregenere.component';
import { ListaInterpretiComponent } from './component/Interpreti/listaInterpreti/ListaInterpreti.component';
import { GeneriricercaperdescrizioneComponent } from './component/Generi/generericercaperdescrizione/generericercaperdescrizione.component';
import { GenerecreaComponent } from './component/Generi/genererecrea/genererecrea.component';
import { PreinterpreteComponent } from './component/Interpreti/preinterprete/preinterprete.component';
import { InterpretiricercaperidComponent } from './component/Interpreti/interpretiricercaperid/interpretiricercaperid.component';
import { InterpretiricercapernomeocognomeComponent } from './component/Interpreti/interpretiricercapernomeocognome/interpretiricercapernomeocognome.component';
import { InterpreticreaComponent } from './component/Interpreti/interpreticrea/interpreticrea.component';
import { PrefilmComponent } from './component/Film/prefilm/prefilm.component';
<<<<<<< HEAD
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
=======
>>>>>>> abd7ef8c6cb5a4a166fa82ce5a8a831cad11a170



@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    ErrorComponent,
    ListaFilmComponent,
    NavigationBarComponent,
    FooterComponent,
    JumbotronComponent,
    ListaGeneriComponent,
    LogoutComponent,
    ListaInterpretiComponent,
    HomeComponent,
    PregenereComponent,
    GenerericercaperidComponent,
    GeneriricercaperdescrizioneComponent,
    GenerecreaComponent,
    PreinterpreteComponent,
    InterpretiricercaperidComponent,
    InterpretiricercapernomeocognomeComponent,
    InterpreticreaComponent,
<<<<<<< HEAD
    PrefilmComponent,
    FilmcreaComponent,
    SearchComponent,
    ModificafilmComponent,
    AggiungiComponent,
    ModificaGenereComponent,
    CancellaComponent,
    RegistrazioneComponent,
    ModificapersonaleComponent,
    HomedashboardComponent,
    ClientidashboardComponent,
=======
    PrefilmComponent
>>>>>>> abd7ef8c6cb5a4a166fa82ce5a8a831cad11a170
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
