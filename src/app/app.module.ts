import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {NavigationComponent} from "./navigation/navigation.component";
import {RouterModule} from "@angular/router";
import { HomePageComponent } from './home-page/home-page.component';
import { PartnersComponent } from './partners/partners.component';
import { SelectBoxComponent } from './select-box/select-box.component';
import {HttpClientModule} from "@angular/common/http";


const appRoutes = [
    {
      path:'',
      component:HomePageComponent
    },
    {
        path:'partners',
        component:PartnersComponent
    }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomePageComponent,
    PartnersComponent,
    SelectBoxComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
