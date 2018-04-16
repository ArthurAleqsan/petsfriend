import {Component, OnInit} from "@angular/core";
import { Contact } from '../contact';
import { NgModel } from '@angular/forms';


@Component({
<<<<<<< HEAD
    selector: 'app-about',
=======
    selector:'',
>>>>>>> 301ad26465e1cfa1218a46b39c0f324ea0ba3e25
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})

export class AboutComponent {


  contact = new Contact(1, '', '', '');

  constructor() {}

  onSubmit() {
    alert("Submitted!!!");
  }

 currentMessage() {
    //return JSON.stringify(this.contact);
    console.log(this.contact)
  }
}


