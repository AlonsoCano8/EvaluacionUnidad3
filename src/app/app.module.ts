import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TareasComponent } from './componentes/tareas/tareas.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NotasComponent } from './componentes/notas/notas.component';
import { ListarTareasComponent } from './componentes/listar-tareas/listar-tareas.component';
import { ListarNotasComponent } from './componentes/listar-notas/listar-notas.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { AppRutasModule } from './app-rutas.module';


@NgModule({
  declarations: [
    AppComponent,
    TareasComponent,
    NotasComponent,
    ListarTareasComponent,
    ListarNotasComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRutasModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
