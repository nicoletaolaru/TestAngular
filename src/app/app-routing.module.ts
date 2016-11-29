import {NgModule, ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from "./about.component";
import {InternshipsComponent} from "./internships.component";


const routes: Routes = [
    {
      path:'',
        redirectTo: '/about',
        pathMatch: 'full'
    },
    {
        path:'about',
        component: AboutComponent
    },
    {
      path:'internships',
        component: InternshipsComponent
    }
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class InternshipRoutingModule { }

export const routing: ModuleWithProviders= RouterModule.forRoot(routes);
