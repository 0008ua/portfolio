import { StoreService } from './../../../services/store.service';
import { SelectorDirective } from './../../../directives/selector.directive';
import { Project } from './../../../interfaces';
import { AfterViewInit, Component, Directive, ElementRef, Input, OnInit, ViewChildren, QueryList, ViewChild } from '@angular/core';
import { Tooltip } from 'bootstrap';

@Directive({ selector: '[selector-directive]' })
export class ChildDirective {
}

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit, AfterViewInit {
  @ViewChildren(SelectorDirective, { read: ElementRef }) tooltips: QueryList<any>;
  @ViewChild('recentProject', { read: ElementRef }) recentProject: ElementRef;

  @Input('project') project: Project;

  constructor(
    private storeService: StoreService,
  ) { }

  ngOnInit(): void {
  }

  moveTo() {
    // const headerOffset = 45;
    // const elementPosition = this.recentProject.nativeElement.getBoundingClientRect().top;
    // const offsetPosition = elementPosition - headerOffset;

    // window.scrollTo({
    //   top: offsetPosition,
    //   behavior: "smooth"
    // });
    this.recentProject.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  ngAfterViewInit() {
    this.tooltips.map((el) => {
      new Tooltip(el.nativeElement, {
        container: 'body'
      });
    })
  }
}
