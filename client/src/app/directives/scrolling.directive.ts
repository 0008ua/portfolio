import { StoreService } from './../services/store.service';
import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';


@Directive({
  selector: '[appScrolling]'
})
export class ScrollingDirective {
  oldScroll = 0;
  @Output() elementOnScreen = new EventEmitter();

  constructor(
    private elementRef: ElementRef,
    private storeService: StoreService
    ) { }

  isElementOnScreen(elem: ElementRef['nativeElement']) {
    // elem.getBoundingClientRect(); видима обасть екрану до елемента
    // pageYOffset верх сторінки до верху видимой обасті
    // innerHeight висота видимої області
    const box = elem.getBoundingClientRect();
    // const screenTop = pageYOffset;
    // const screenBottom = pageYOffset + innerHeight;
    const elementTop = box.top;
    const elementBottom = box.bottom;
    if (elementBottom > 0 && elementTop <= innerHeight - innerHeight * .4 && elementBottom > innerHeight - innerHeight * .4) {
      return true;
    } else {
      return false;
    }
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(e) {
    if (this.isElementOnScreen(this.elementRef.nativeElement)) {
      // this.elementOnScreen.emit(this.elementRef.nativeElement);
      this.storeService.elementOnScreenIdx(Number(this.elementRef.nativeElement.getAttribute('id')));
    }

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
  }

}
