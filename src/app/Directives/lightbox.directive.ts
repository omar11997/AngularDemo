import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[Lightbox]',
})
export class LightboxDirective implements OnChanges {
  ///prop decorator indicate that this prop wil come from outside the class
  // @Input() highlightColor: string = 'yellow';
  ///we can use alias inside input function
  @Input('Lightbox') highlightColor: string = 'yellow';
  @Input() defaultColor: string = 'darkblue';

  constructor(private elemRef: ElementRef) {
    //elemRef.nativeElement.style.border = `2px solid ${this.defaultColor} `;
  }
  ngOnChanges(): void {
    this.elemRef.nativeElement.style.border = `2px solid ${this.defaultColor} `;
  }
  @HostListener('mouseover') onMouseOver() {
    this.elemRef.nativeElement.style.border = `2px solid ${this.highlightColor} `;
  }
  @HostListener('mouseout') onMouseOut() {
    this.elemRef.nativeElement.style.border = `2px solid ${this.defaultColor} `;
  }
}

/// Custom Directive that you can use to change the behavior of the html element
// when using the direcive on the element it takes a reference from the element and send it to the directive  class
//then you can make your oqn logic
