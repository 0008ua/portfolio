import { StoreService } from './../services/store.service';
import { Directive, ElementRef, HostListener } from '@angular/core';


@Directive({
  selector: '[appScrolling]'
})
export class ScrollingDirective {
  oldScroll = 0;

  constructor(
    private elementRef: ElementRef,
    private storeService: StoreService
    ) { }

  @HostListener('window:scroll', ['$event'])
  onScroll(e) {
    const box = this.elementRef.nativeElement.getBoundingClientRect();
    if (this.oldScroll > box.top) {
      // down
      this.storeService.scrolling(true);
      this.oldScroll = box.top;
    }
    if (this.oldScroll + 10 < box.top)  {
      // up
      this.storeService.scrolling(false);
      this.oldScroll = box.top;
    }
    console.log('box.top', box.top);


  }

}
