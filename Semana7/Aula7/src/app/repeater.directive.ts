import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appRepeater]'
})
export class RepeaterDirective {

  constructor(private templateRef : TemplateRef<any>, private viewContainerRef : ViewContainerRef) { }

  @Input() set appRepeater (times : number) {
    for (let i = 0; i < times; i++) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }
  }
}
