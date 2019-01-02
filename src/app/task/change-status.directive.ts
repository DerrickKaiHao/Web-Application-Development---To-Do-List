import { Directive, ElementRef, Renderer2, OnInit, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[changeStatus]'
})
export class ChangeStatusDirective {

  @Input('changeStatus') color: string;

  constructor(public elRef: ElementRef, public renderer: Renderer2 ) { }

  ngOnInit() {
    
}
  
@HostListener('mouseleave') mouseExit(eventData: Event) {
  this.renderer.setStyle(this.elRef.nativeElement, "border-left",this.color);
  console.log(this.color)



}



}
