import {Component, OnInit, Input, SimpleChanges, OnChanges, SimpleChange } from '@angular/core';
import {MembersService} from './members.service';
import {SelectBoxComponent} from '../select-box.component';


@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss'],
})
export class MembersComponent {
  public members: Object[];
  @Input() public set selectedPet(selectedPet: Object) {
    this.getAllMembers(selectedPet['pet_id']);
  };

  constructor(private membersService: MembersService) {}

  public getAllMembers(pet_id: number): void {
    this.membersService.getMembers().subscribe(members => {
      this.members = members.filter(member => {
        return member.pet_id === pet_id;
      });
      console.log(this.members);
    })
  }
}
