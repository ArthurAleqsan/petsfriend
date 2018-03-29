import { Component } from '@angular/core';

@Component({
  selector: 'app-select-box',
  templateUrl: './select-box.component.html',
  styleUrls: ['./select-box.component.scss']
})
export class SelectBoxComponent{
    public selectItems:Array<object> = [
        {'itemName':'DOG','img':'./../../assets/images/selectBox/dog.png'},
        {'itemName':'CAT','img':'./../../assets/images/selectBox/cat.png'},
        {'itemName':'PARROT','img':'./../../assets/images/selectBox/parrot.png'},
        {'itemName':'FISH','img':'./../../assets/images/selectBox/fish.png'},
        {'itemName':'SOMEONE ELSE','img':'./../../assets/images/selectBox/briefcase.png'},
    ];
    public selectAnimal(item:Object):void{
        console.log(item)
    }
}
