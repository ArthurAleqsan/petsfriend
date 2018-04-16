import { Component } from '@angular/core';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss'],
    host: {
        '(window:scroll)': 'onScroll($event)'
    }
})

export class NavigationComponent {
    public navItems: Array<object> = [
        {
            itemName: 'HOME',
            link: '',
            isActive: false
        },
        {
            itemName: 'ABOUT',
            link: '/about',
            isActive: false
        },
        {
            itemName: 'PARTNERS',
            link: '/partners',
            isActive: false
        },
        {
            itemName: 'SHOP',
            link: '/jhcs',
            isActive: false
        },
        {
            itemName: 'SIGN UP',
            link: '/asdasd',
            isActive: false
        },
        {
            itemName:'SIGN IN',
            link:'/fdsfs',
            isActive:false
        }
    ];

    public isScrolled: boolean = false;
    public currPos: number = 0;
    public startPos: number = 0;
    public changePos: number = 30;

    constructor() {}

    ngOnInit() {
        let self = this;
        window.onload = function() {
            setTimeout(() => {
                self.isScrolled = false; //  chgitem grdon tarberaka te che bayc ha. if you wanna k now why i did it, call me!
            },0);
            //self.isScrolled = false;
        }
    }

    onScroll(evt) {
        this.currPos = (window.pageYOffset || evt.target.scrollTop) - (evt.target.clientTop || 0);

        if (this.currPos >= this.changePos) {
            this.isScrolled = true;
        } 
        else {
            this.isScrolled = false;
        }
        this.changePos = this.currPos;
    }
}




