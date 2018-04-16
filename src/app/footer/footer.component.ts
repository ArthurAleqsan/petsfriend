<<<<<<< HEAD
import { Component } from "@angular/core";

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
=======
import {Component} from "@angular/core";
import {NavigationComponent} from ".././navigation/navigation.component";


@Component({
    selector:'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent  {
    public nav:Object=new NavigationComponent();
    navItems=this.nav['navItems'];
>>>>>>> 301ad26465e1cfa1218a46b39c0f324ea0ba3e25

export class FooterComponent{
}