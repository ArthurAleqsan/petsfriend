import {Component, OnInit} from "@angular/core";
import { Contact } from '../contact'
import { NgModel } from '@angular/forms';
@Component({
    // selector:'router-outlet',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent  {
    // contact: Contact = {
    //     id: 1,
    //     name: 'Windstorm',
    //     email:'',
    //     message:''
    //   };
    contact=new Contact(1,'','','');
    constructor(){}



    get currentMessage(){
        
        return JSON.stringify(this.contact);
    }
}