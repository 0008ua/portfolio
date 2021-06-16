import { Project } from './../../../interfaces';
import { AfterViewInit, Component, Directive, ElementRef, Input, OnInit, ViewChildren, QueryList } from '@angular/core';
import { Tooltip, Popover } from 'bootstrap';

@Directive({ selector: '[selector-directive]' })
export class ChildDirective {
}

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit, AfterViewInit {
  @ViewChildren(ChildDirective, { read: ElementRef }) tooltips: QueryList<any>;

  @Input('project') project: Project;
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
