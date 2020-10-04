import { Directive, Input, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appSetBackgroudDirective]'
})
export class SetBackgroudDirectiveDirective implements OnInit{
  @Input("appSetBackgroudDirective") backgroundcolor: number;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void{
    if( this.backgroundcolor %2 !== 0){
      this.renderer.setStyle(this.elementRef.nativeElement, "background-color", "lightblue");
    }
  }

}
