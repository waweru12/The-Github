import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appLighter]'
})
export class LighterDirective {
  constructor(private elem: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('#00CED1');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.elem.nativeElement.style.backgroundColor = color;
  }
}