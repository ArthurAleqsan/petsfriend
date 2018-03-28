import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {NavigationComponent} from "./navigation/navigation.component";
import {RouterModule,Routes} from "@angular/router";
// import {AboutComponent} from "./about/about.component";
import { HomePageComponent } from './home-page/home-page.component';
import { PartnersComponent } from './partners/partners.component';
// import {FooterComponent} from "./footer/footer.component";


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
    // AboutComponent,
    HomePageComponent,
    PartnersComponent,
    // FooterComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
