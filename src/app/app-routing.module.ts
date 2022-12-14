import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NuevaExperienciaComponent } from './components/experiencia/nueva-experiencia/nueva-experiencia.component';
import { ModificarExperienciaComponent } from './components/experiencia/modificar-experiencia/modificar-experiencia.component';
import { NuevaEducacionComponent } from './components/educacion/nueva-educacion/nueva-educacion.component';
import { ModificarEducacionComponent } from './components/educacion/modificar-educacion/modificar-educacion.component';

const routes: Routes= [

  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'nuevaexp', component: NuevaExperienciaComponent},
  {path: 'editarexp/:id', component: ModificarExperienciaComponent},
  {path: 'cargarEducacion', component: NuevaEducacionComponent},
  {path: 'editareducacion/:id', component: ModificarEducacionComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
