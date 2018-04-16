import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule  } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PartnersComponent } from './partners/partners.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';



import { SelectBoxComponent } from './select-box/select-box.component';
import { HoverDirective } from './hover.directive';
import { MembersComponent } from './select-box/members/members.component';
import { RatingComponent } from './rating/rating.component';
import { MembersService } from './select-box/members/members.service';
import { SelectBoxService } from './select-box/select-box.service';



const appRoutes = [
    {
      path: '',
      component: HomePageComponent
    },
    {
        path: 'partners',
        component: PartnersComponent
    },
    {
      path: 'about',
      component: AboutComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomePageComponent,
    AboutComponent,
    PartnersComponent,
    SelectBoxComponent,
    HoverDirective,
    MembersComponent,
    RatingComponent,
    FooterComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    MembersService,
    SelectBoxService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
