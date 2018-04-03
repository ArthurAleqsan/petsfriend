import { Component,Input } from '@angular/core';
import {Services} from "@angular/core/src/view";
import {SelectBoxService} from "./select-box.service";

@Component({
  selector: 'app-select-box',
  providers:[SelectBoxService],
  templateUrl: './select-box.component.html',
  styleUrls: ['./select-box.component.scss']
})
export class SelectBoxComponent{


    public selectItems:Array<object> = [
        {'id':1,'itemName':'DOG','img':'./../../assets/images/selectBox/dog.png','isActive':false},
        {'id':2,'itemName':'CAT','img':'./../../assets/images/selectBox/cat.png','isActive':false},
        {'id':3,'itemName':'PARROT','img':'./../../assets/images/selectBox/parrot.png','isActive':false},
        {'id':4,'itemName':'FISH','img':'./../../assets/images/selectBox/fish.png','isActive':false},
        {'id':5,'itemName':'SOMEONE ELSE','img':'./../../assets/images/selectBox/briefcase.png','isActive':false},
    ];

    constructor(private selectBoxService:SelectBoxService){

    }

    public selectAnimal(item){
        let typeOfAnimal = {};
        this.selectBoxService.getServices().subscribe(services=>{
            services.map(responseObj=> {
                    if(responseObj['pet_id'] === item.id) {
                        return typeOfAnimal = responseObj;
                    }
                }
            );
            console.log(typeOfAnimal['services']);
        })

}}
