import {Directive, HostBinding, HostListener} from "@angular/core";
// import {SelectBoxService} from "./select-box/select-box.service";
// import {SelectBoxComponent} from "./select-box/select-box.component";

@Directive({
    selector:'[hoverChoice]'
})
export class HoverDirective {



    @HostBinding ('class.hovered') isHovered: boolean = false;
    @HostListener('mouseenter') onMouseEnter() {
        this.isHovered = true;
    }
    @HostListener('mouseleave') onMouseLeave(){
        this.isHovered = false;
    }
}
