import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
 selector: '[myExpandMenu]'
})
export class MyExpandMenu {
 isOpen = false;
 @HostBinding('class.active')
      get active() {
        return this.isOpen;
  }

 @HostListener('click', ['$event.target'])
      toggleOpen() {
        this.isOpen = !this.isOpen;
  }
}
