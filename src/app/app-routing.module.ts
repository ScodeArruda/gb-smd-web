import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FooterComponent } from './pages/footer/footer.component';
import { HeaderComponent } from './pages/header/header.component';
import { MasterComponent } from './pages/master/master.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ServicosComponent } from './pages/servicos/servicos.component';
import { TeamComponent } from './pages/team/team.component';

// const routes: Routes = [];
const routes: Routes = [
  // { path: 'header', component: HeaderComponent },

  // { path: 'portfolio', component: PortfolioComponent },

  // { path: 'contact', component: ContactComponent },

  {
    path: '',
    component: HeaderComponent,
    children: [
      { path: '', component: AboutComponent },
      { path: 'services', component: ServicosComponent },
      { path: 'portfolio', component: PortfolioComponent },
      { path: 'team', component: TeamComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'footer', component: FooterComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
