import {Component, OnInit} from "@angular/core";
import { Contact } from '../contact'
import { NgModel } from '@angular/forms';


@Component({
    // selector:'router-outlet',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})

export class AboutComponent implements OnInit {
  
    contact=new Contact(1,'','','');
    constructor(){}


    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }
    get currentMessage(){
        
        //return JSON.stringify(this.contact);
        return this.contact;
    }
//     this.heroesService.addHero(newHero)
//   .subscribe(hero => this.heroes.push(hero));

}