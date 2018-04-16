import {Component, OnInit} from "@angular/core";
import { Contact } from '../contact';
import { NgModel } from '@angular/forms';


@Component({
    selector:'',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})

export class AboutComponent {


  contact = new Contact(1, '', '', '');

  constructor() {
  }


 currentMessage() {
    //return JSON.stringify(this.contact);
    console.log(this.contact)
  }
}


