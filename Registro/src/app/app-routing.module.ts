import { ListadoComponent } from './listado/listado.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  { path: '', component: ListadoComponent },
  { path: 'crear', component: AdminComponent },
  { path: 'editar/:id', component: AdminComponent },
  { path: 'listado', component: ListadoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
