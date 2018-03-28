import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {NavigationComponent} from "./navigation/navigation.component";
import {RouterModule,Routes} from "@angular/router";
import {AboutComponent} from "./about/about.component";
// import {FooterComponent} from "./footer/footer.component";


const appRoutes = [
    {
      path:'about',
      component:AboutComponent
    },
    {
        path:'partners',
        component:AboutComponent
    }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AboutComponent,
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
