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

}