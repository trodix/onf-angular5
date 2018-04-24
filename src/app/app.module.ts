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

const appRoutes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'arbres/:id', component: DetailComponent },
  
]


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SidebarComponent,
    ListTableComponent,
    FilterPipe,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
