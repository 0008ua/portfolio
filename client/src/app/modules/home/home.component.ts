import { AfterViewInit, Component, Directive, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Tooltip, Popover } from 'bootstrap';

import { projects, technologies } from '../../app.data';

@Directive({ selector: '[selector-directive]' })
export class ChildDirective {
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  projects = projects;
  technologies = technologies;
  @ViewChildren(ChildDirective, { read: ElementRef }) tooltips: QueryList<any>;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {

    this.tooltips.map((el) => {
      new Tooltip(el.nativeElement, {
        container: 'body'
      });
    })
  }
}
