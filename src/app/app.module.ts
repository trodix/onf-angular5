import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { DataService } from './data.service';
import { HttpModule } from "@angular/http";


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ListTableComponent } from './list-table/list-table.component';
import { FilterPipe } from './filter.pipe';
import { DetailComponent } from './detail/detail.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './auth.service';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { AuthAdminGuard } from './auth-admin.guard';
import { ChartComponent } from './chart/chart.component';
import { ChartService } from './chart.service';

const appRoutes: Routes = [

  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'arbres/:id', component: DetailComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [AuthGuard, AuthAdminGuard]},
  { path: 'login', component: LoginComponent },
  
]


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SidebarComponent,
    ListTableComponent,
    FilterPipe,
    DetailComponent,
    RegisterComponent,
    LoginComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpModule
  ],
  providers: [DataService, AuthService, AuthGuard, ChartService, AuthAdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
