import { Component, } from '@angular/core';
import {SelectBoxService} from './select-box.service';

@Component({
  selector: 'app-select-box',
  providers: [SelectBoxService],
  templateUrl: './select-box.component.html',
  styleUrls: ['./select-box.component.scss']
})

export class SelectBoxComponent {
    public selectedPet: object;
<<<<<<< HEAD
    public typeOfPet = {};

    public selectItems: Array<object> = [
        {'id':1,'itemName':'DOG','img':'./../../assets/images/selectBox/dog.png','isActive':false},
        {'id':2,'itemName':'CAT','img':'./../../assets/images/selectBox/cat.png','isActive':false},
        {'id':3,'itemName':'PARROT','img':'./../../assets/images/selectBox/parrot.png','isActive':false},
        {'id':4,'itemName':'FISH','img':'./../../assets/images/selectBox/fish.png','isActive':false},
        {'id':5,'itemName':'SOMEONE ELSE','img':'./../../assets/images/selectBox/briefcase.png','isActive':false},
=======
    public typeOfPet: object = {};

    public selectItems: Array<object> = [
        {'id': 1, 'itemName': 'DOG', 'img': './../../assets/images/selectBox/dog.png', 'isActive': false},
        {'id': 2, 'itemName': 'CAT', 'img': './../../assets/images/selectBox/cat.png', 'isActive': false},
        {'id': 3, 'itemName': 'PARROT', 'img': './../../assets/images/selectBox/parrot.png', 'isActive': false},
        {'id': 4, 'itemName': 'FISH', 'img': './../../assets/images/selectBox/fish.png', 'isActive': false},
        {'id': 5, 'itemName': 'SOMEONE ELSE', 'img': './../../assets/images/selectBox/briefcase.png', 'isActive': false},
>>>>>>> c63e78a8f0c90cc2a6cef3016606a3a2a64d4017
    ];

    constructor(private selectBoxService: SelectBoxService ) {

    }

    private selectPet(item) {

        this.selectBoxService.getServices().subscribe(services => {
            services.map(responseObj => {
                    if (responseObj['pet_id'] === item.id) {
                        return this.typeOfPet = responseObj;
                    }
                }
            );
<<<<<<< HEAD
            // console.log(typeOfPet)
            this.toggleServices(item);
        })
    }
    private toggleServices(pet){

        let previous: Object = this.selectItems.find(el => el['isActive'])
        console.log(this.selectItems);
        if (previous && previous !== pet) {
            previous['isActive'] = !previous['isActive'];
        }
        pet['isActive'] = true;  
        // this.selectedPet = pet;
        //console.log(this.selectedPet)
        // console.log(this.typeOfPet)
        // pet['isActive']=!pet['isActive'];
    }
=======
            this.selectedPet = this.typeOfPet;
             this.toggleServices(item);
        });
    }

    private toggleServices(pet: Object) {
>>>>>>> c63e78a8f0c90cc2a6cef3016606a3a2a64d4017

        const previous: Object = this.selectItems.find(el => el['isActive']);
        if (previous && previous !== pet) {
            previous['isActive'] = !previous['isActive'];
        }
        pet['isActive'] = true;
    }
}
