import { AfterViewInit, Directive, ElementRef, HostBinding, HostListener, ViewChild } from '@angular/core';

@Directive({
  selector: '[appHorizontalScroll]'
})
export class HorizontalScrollDirective implements AfterViewInit {
  @HostListener('wheel', ["$event"]) onMouseEnter(event: any) {

    event.preventDefault();

    const scrollDistance = Math.sign(event.deltaY) * 100;
    this.scrollPosition += scrollDistance;
    if (this.scrollPosition < 0) this.scrollPosition = 0 
    if (this.scrollPosition > this.maxScrollDistance) this.scrollPosition = this.maxScrollDistance
  }

  @HostBinding('scrollLeft') scrollPosition: any = 0;

  private maxScrollDistance!: number 
  
  constructor(private elementRef: ElementRef) { 
  }

  ngAfterViewInit() {
    this.maxScrollDistance = this.elementRef.nativeElement.scrollWidth - this.elementRef.nativeElement.clientWidth
  }
}
