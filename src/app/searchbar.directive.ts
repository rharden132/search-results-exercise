import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appSearchbar]'
})
export class SearchbarDirective {

  constructor(private elementRef: ElementRef) { }
  @HostListener("searched") clearSearch(){

  }
}
