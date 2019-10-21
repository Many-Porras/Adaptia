import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './users/login/login.component';
import { ProfileComponent } from './users/profile/profile.component';
import { RegisterComponent } from './users/register/register.component';
import { HomeComponent } from './home/home.component';
import { WeAreComponent } from './we-are/we-are.component';
import { ServicesComponent } from './services/services.component';
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
    ProjectsComponent,
    ViewProjectComponent,
    ClientsComponent,
    FooterComponent
]