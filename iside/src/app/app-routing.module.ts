import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoriaComponent } from './storia/storia/storia.component';
import { HomeComponent } from './home/home/home.component';
import { ServiziComponent } from './servizi/servizi/servizi.component';
import { LavoraComponent } from './lavora/lavora/lavora.component';
import { EmailComponent } from './email/email/email.component';
import { LavoriComponent } from './lavori/lavori/lavori.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'storia', component: StoriaComponent},
  {path:'servizi', component: ServiziComponent},
  {path:'lavora', component: LavoraComponent},
  {path:'email', component: EmailComponent},
  {path:'lavori', component: LavoriComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
