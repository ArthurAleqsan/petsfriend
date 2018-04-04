import {Directive, HostBinding, HostListener} from "@angular/core";
// import {SelectBoxService} from "./select-box/select-box.service";
import {SelectBoxComponent} from "./select-box/select-box.component";

@Directive({
    selector:'[activeChoice]'
})
export class ActiveDirective{


    @HostBinding('class.actived') isActive:boolean = false;

    @HostListener('click') onClick(){
        this.isActive = !this.isActive;
    }


}