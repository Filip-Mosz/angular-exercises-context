import { Directive, Input, ElementRef, Renderer2, OnInit, OnChanges } from '@angular/core';

@Directive({
  selector: '[appSetBackgroudDirective]'
})
export class SetBackgroudDirectiveDirective implements OnChanges{
  @Input("appSetBackgroudDirective") backgroundcolor: number;
  private defaultBackgroundColor: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.defaultBackgroundColor = this.elementRef.nativeElement.style.backgroundcolor;
  }

  ngOnChanges(): void{
    if( this.backgroundcolor %2 !== 0){
      this.renderer.setStyle(this.elementRef.nativeElement, "background-color", "lightblue");
    }else{
      this.renderer.removeStyle(this.elementRef.nativeElement, "background-color");
    }
  }

}
