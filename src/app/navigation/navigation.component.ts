import {Component} from "@angular/core";

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent{
    public navItems: Array<object> = [
        {
            itemName:'HOME',
            link:'/',
            isActive:true
        },
        {
            itemName:'ABOUT',
            link:'/about',
            isActive:false
        },
        {
            itemName:'PARTNERS',
            link:'/partners',
            isActive:false
        },
        {
            itemName:'SHOP',
            link:'/',
            isActive:false
        },
        {
            itemName:'SIGN UP',
            link:'/',
            isActive:false
        },
        {
            itemName:'SIGN IN',
            link:'/',
            isActive:false
        },
    ];
   // public activateTab(){
   //      this.navItems['isActive'] = true;
   //      console.log(555)
   //  }

}