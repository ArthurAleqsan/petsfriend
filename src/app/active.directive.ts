import {Directive} from "@angular/core";
import {SelectBoxService} from "./select-box/select-box.service";

@Directive({
    selector:'[activeChoice]'
})
export class ActiveDirective{
    constructor(activeClass : SelectBoxService){}

}