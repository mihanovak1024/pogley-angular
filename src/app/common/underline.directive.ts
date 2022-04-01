import { Directive, ElementRef, HostListener, Renderer2 } from "@angular/core";

@Directive({
  selector: "[underlineDirective]"
})
export class UnderlineDirective{

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  @HostListener("mouseover") mouseover(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'text-decoration', 'underline');
  }

  @HostListener("mouseleave") mouseleave(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'text-decoration', 'none');
  }
}
