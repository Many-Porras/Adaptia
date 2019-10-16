import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { WeAreComponent } from './we-are/we-are.component';
import { ServicesComponent } from './services/services.component';
import { ProjectsComponent } from './projects/projects.component';
import { ClientsComponent } from './clients/clients.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
    { path: 'header', component: HeaderComponent },
    { path: 'home', component: HomeComponent },
    { path: 'weare', component: WeAreComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'clients', component: ClientsComponent },
    { path: 'footer', component: FooterComponent }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [
    HeaderComponent,
    HomeComponent,
    WeAreComponent,
    ServicesComponent,
    ProjectsComponent,
    ClientsComponent,
    FooterComponent
]