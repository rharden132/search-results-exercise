import { Directive, ElementRef, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appRandomBgColorDirective]'
})
export class RandomBgColorDirectiveDirective implements OnInit {

  constructor(private renderer: Renderer2, private elementRef: ElementRef) { }
  ngOnInit(){
    let randomColor: String = Math.floor(Math.random()*16777215).toString(16);
    this.renderer.setStyle(this.elementRef.nativeElement,
      "backgroundColor", "#" + randomColor);
  }
  @HostListener("mouseenter") changeBGColor(){
    let randomColor: String = Math.floor(Math.random()*16777215).toString(16);
    this.renderer.setStyle(this.elementRef.nativeElement,
      "backgroundColor", "#" + randomColor);
  }

}
