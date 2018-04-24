import { Component, Input } from '@angular/core';
import {SelectBoxService} from './select-box.service';
import {MembersComponent} from './members/members.component';

@Component({
  selector: 'app-select-box',
  templateUrl: './select-box.component.html',
  styleUrls: ['./select-box.component.scss'],

})

export class SelectBoxComponent {
    public selectedPet: Object;
    public typeOfPet: Object = {};
    public icons:Array<String>
    

    public selectItems: Array<object> = [
        {'id':1,'itemName':'DOG','img':'./../../assets/images/selectBox/dog.png','isActive':false},
        {'id':2,'itemName':'CAT','img':'./../../assets/images/selectBox/cat.png','isActive':false},
        {'id':3,'itemName':'PARROT','img':'./../../assets/images/selectBox/parrot.png','isActive':false},
        {'id':4,'itemName':'FISH','img':'./../../assets/images/selectBox/fish.png','isActive':false},
        {'id':5,'itemName':'SOMEONE ELSE','img':'./../../assets/images/selectBox/briefcase.png','isActive':false},
    ];

    constructor(private selectBoxService: SelectBoxService) {

    }

    private selectPet(item) {

        this.selectBoxService.getServices().subscribe(services => {
            services.map(responseObj => {
                    if (responseObj['pet_id'] === item.id) {
                        return this.typeOfPet = responseObj;
                    }
                }
            );
            this.selectedPet = this.typeOfPet;
            this.icons=this.typeOfPet['icons'];
            this.icons=this.icons.map(url=>"./../../assets/images/services-icons/"+url);
            this.toggleServices(item);
        });
    }

    private toggleServices(pet: Object) {

        const previous: Object = this.selectItems.find(el => el['isActive']);
        if (previous && previous !== pet) {
            previous['isActive'] = !previous['isActive'];
        }
        pet['isActive'] = true;  
    }
}
