import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
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
    InterpreticreaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
