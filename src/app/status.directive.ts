import { Directive, ElementRef, Renderer2, OnInit, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appStatus]'
})
export class StatusDirective {

  @Input('appStatus') highlightColor : {color: string}
  
  constructor(public elRef: ElementRef, public renderer: Renderer2 ) { }

//   ngOnInit() {
//     this.renderer.setStyle(this.elRef.nativeElement, "background-color",this.highlightColor.bkgd)
// }
// private backgroundColor = 'white';
//  @HostListener('mouseenter') mouseover() {
//   this.renderer.setStyle(this.elRef.nativeElement, "border-left",'3px solid red');
//   this.renderer.setStyle(this.elRef.nativeElement, "background-color",this.backgroundColor)

// };

@HostListener('mouseleave') mouseExit(eventData: Event) {
  // this.renderer.setStyle(this.elRef.nativeElement, "border-left",'3px solid green')
  // this.renderer.setStyle(this.elRef.nativeElement, "background-color",'lightgrey')

  this.renderer.setStyle(this.elRef.nativeElement, "border-left" ,  this.highlightColor.color);
  console.log(this.highlightColor.color)
  // this.renderer.setStyle(this.elRef.nativeElement, "color","black")


}


}
