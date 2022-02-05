import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PruebasComponent } from './pruebas/pruebas.component';
import { ColoresComponent } from './colores/colores.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { CdsComponent } from './cds/cds.component';
import { InicioComponent } from './inicio/inicio.component';
import { InformacionComponent } from './informacion/informacion.component';
import { CdclickedService } from './cdclicked.service';
import { RendercdsComponent } from './rendercds/rendercds.component';

const rutas:Routes = [
  {path:'listado-cds', component: CdsComponent},
  {path:'renderer2',component:RendercdsComponent},
  {path:'', component:InicioComponent, pathMatch: 'full'},
  {path:'informacion/:cdId', component: InformacionComponent},
  {path:'informacion', redirectTo: '/'},
  {path:'**', redirectTo: '/'}
]

@NgModule({
  declarations: [
    AppComponent,
    PruebasComponent,
    ColoresComponent,
    CabeceraComponent,
    CdsComponent,
    InicioComponent,
    InformacionComponent,
    RendercdsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(rutas),
    HttpClientModule
  ],
  providers: [
    CdclickedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
