import { Directive, HostListener, Renderer2, TemplateRef, OnInit, HostBinding, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAnimator]'
})
export class AnimatorDirective implements OnInit{

  constructor(private elementRef : ElementRef, private renderizador: Renderer2) { }

  ngOnInit() : void {
    
  }

  @HostListener('click') onClick() {  
    this.renderizador.setStyle(this.elementRef.nativeElement, 'background-color', 'red');
  }
  
}
