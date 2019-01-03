import { Directive, ElementRef, Renderer2, OnInit, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appStatus]'
})
export class StatusDirective {

  @Input('appStatus') highlightColor : {color: string}
  
  constructor(public elRef: ElementRef, public renderer: Renderer2 ) { }

  ngOnInit() {

}

 @HostListener('mouseenter') mouseover() {
  this.renderer.setStyle(this.elRef.nativeElement, "border-left" ,  this.highlightColor.color);
  this.renderer.setStyle(this.elRef.nativeElement, "background-color","pink")
  

};

@HostListener('mouseleave') mouseExit(eventData: Event) {
  this.renderer.setStyle(this.elRef.nativeElement, "border-left",'3px solid black');
  this.renderer.setStyle(this.elRef.nativeElement, "background-color","lightgrey")
}


}
