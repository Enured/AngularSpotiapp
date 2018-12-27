import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//importar router y se coloca abajo de browser module en los imports
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

// Importar rutas desde app.routes.ts
import { ROUTES } from './app.routes';
// importar para hacer peticiones http
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistaComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    //La constante del archivo app.routes.ts
    RouterModule.forRoot( ROUTES, {useHash: true } )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
