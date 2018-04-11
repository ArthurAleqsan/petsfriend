import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import {NavigationComponent} from "./navigation/navigation.component";
import { HomePageComponent } from './home-page/home-page.component';
import { PartnersComponent } from './partners/partners.component';
// import { AboutComponent} from "./about/about.component";
import { SelectBoxComponent } from './select-box/select-box.component';
import {ActiveDirective} from "./active.directive";



const appRoutes = [
    {
      path: '',
      component: HomePageComponent
    },
    {
        path:'partners',
        component:PartnersComponent
    },

];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomePageComponent,
    // AboutComponent,
    PartnersComponent,
    SelectBoxComponent,
    ActiveDirective,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
