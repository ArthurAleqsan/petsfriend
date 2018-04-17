import {Component, OnInit, Input, SimpleChanges, OnChanges, SimpleChange } from '@angular/core';
import {MembersService} from './members.service';
import {SelectBoxComponent} from '../select-box.component';


@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss'],
})
export class MembersComponent implements OnInit {
  constructor(private membersService: MembersService, public selectBoxComponent: SelectBoxComponent) {
  }

  @Input() selectItem: Object = this.selectBoxComponent.typeOfPet['pet_id'];

  public getAllMembers() {
    this.membersService.getMembers().subscribe(members => {
      members.map(member => {
        if (member['pet_id'] === this.selectBoxComponent.typeOfPet['pet_id']) {
          console.log(member);
          return member;
        }
      });
    });
  }

  ngOnInit() {
    this.getAllMembers();
    console.log(this.selectItem);
  }
  // ngOnChanges(changes: SimpleChanges ) {
  //   console.log(changes);
  // }



}
