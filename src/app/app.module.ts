import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule  } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PartnersComponent } from './partners/partners.component';
<<<<<<< HEAD
import { AboutComponent }  from './about/about.component'
=======
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';

>>>>>>> 301ad26465e1cfa1218a46b39c0f324ea0ba3e25


import { SelectBoxComponent } from './select-box/select-box.component';
import { HoverDirective } from './hover.directive';
import { MembersComponent } from './select-box/members/members.component';
import { RatingComponent } from './rating/rating.component';
import { MembersService } from './select-box/members/members.service';
import { SelectBoxService } from './select-box/select-box.service';
import { FooterComponent } from './footer/footer.component';


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
<<<<<<< HEAD
    }
=======
  },
>>>>>>> 301ad26465e1cfa1218a46b39c0f324ea0ba3e25
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
