import { StoreService } from './../../services/store.service';
import { Component, Directive, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Collapse } from 'bootstrap';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  isScrollingDown = false;
  @ViewChild('navbarToggler') menuToggleRef: ElementRef;
  bsCollapse: any;

  constructor(
    private storeService: StoreService,
  ) { }

  ngOnInit(): void {
    this.storeService.scrollingHandler().subscribe((isScrollingDown) => {
      this.isScrollingDown = isScrollingDown;
    })
  }

  toggle() {
    console.log('toggle')
    this.bsCollapse.toggle();
  }

  ngAfterViewInit() {
    this.bsCollapse = new Collapse(this.menuToggleRef.nativeElement, {toggle: false});
    // this.bsCollapse.hide();
    console.log('this.bsCollapse', this.bsCollapse)
    // navLinks.forEach((l) => {
    //   l.addEventListener('click', () => { bsCollapse.toggle() })
    // });

    // this.navLinksRef.map((el) => {
    //   bsCollapse.toggle();
    // })
  }
}
