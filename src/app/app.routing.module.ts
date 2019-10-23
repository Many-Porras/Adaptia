import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './users/login/login.component';
import { ProfileComponent } from './users/profile/profile.component';
import { RegisterComponent } from './users/register/register.component';
import { HomeComponent } from './home/home.component';
import { WeAreComponent } from './we-are/we-are.component';
import { ServicesComponent } from './services/services.component';
import { Service01Component } from './services/service01/service01.component';
import { Service02Component } from './services/service02/service02.component';
import { Service03Component } from './services/service03/service03.component';
import { Service04Component } from './services/service04/service04.component';
import { Service05Component } from './services/service05/service05.component';
import { ProjectsComponent } from './projects/projects.component';
import { ViewProjectComponent } from './projects/view-project/view-project.component';
import { ClientsComponent } from './clients/clients.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
    { path: 'header', component: HeaderComponent },
    { path: 'user/login', component: LoginComponent },
    { path: 'user/register', component: RegisterComponent },
    { path: 'user/profile', component: ProfileComponent },
    { path: 'home', component: HomeComponent },
    { path: 'weare', component: WeAreComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'service01', component: Service01Component },
    { path: 'service02', component: Service02Component },
    { path: 'service03', component: Service03Component },
    { path: 'service04', component: Service04Component },
    { path: 'service05', component: Service05Component },
    { path: 'projects', component: ProjectsComponent },
    { path: 'ViewProject', component: ViewProjectComponent },
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
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    HomeComponent,
    WeAreComponent,
    ServicesComponent,
    Service01Component,
    Service02Component,
    Service03Component,
    Service04Component,
    Service05Component,
    ProjectsComponent,
    ViewProjectComponent,
    ClientsComponent,
    FooterComponent
]