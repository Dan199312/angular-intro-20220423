import { Directive, ElementRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  @Input() public appHighlightColor: string = '#f0f';
  

  constructor(private elemntRef: ElementRef) { }

  public ngOnInit(): void {
    const element: HTMLElement = this.elemntRef.nativeElement;
    element.style.backgroundColor = this.appHighlightColor;
    element.style.fontSize ='32px';

  }

}
