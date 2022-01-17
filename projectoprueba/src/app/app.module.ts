import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PruebasComponent } from './pruebas/pruebas.component';
import { ColoresComponent } from './colores/colores.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { CdsComponent } from './cds/cds.component';
import { InicioComponent } from './inicio/inicio.component';
import { InformacionComponent } from './informacion/informacion.component';

const rutas:Routes = [
  {path:'listado-cds', component: CdsComponent},
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
    InformacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
