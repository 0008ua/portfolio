import { ProjectComponent } from './project/project.component';
import { SelectorDirective } from './../../directives/selector.directive';
import { AfterViewInit, Component, Directive, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { mainTechnologies, projects } from '../../app.data';
import { Tooltip } from 'bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChildren(SelectorDirective, { read: ElementRef }) tooltips: QueryList<any>;
  @ViewChildren(ProjectComponent) projectComponents: QueryList<any>;
  mainTechnologies = mainTechnologies;
  projects = projects;

  constructor() { }

  ngOnInit(): void {
  }

  moveTo(index: number) {
    // move to child component order number === index
    this.projectComponents.forEach((el, idx) => {
      if (idx === index) {
        el.moveTo();
      }
    });
  }

  ngAfterViewInit() {

    this.tooltips.map((el) => {
      new Tooltip(el.nativeElement, {
        container: 'body'
      });
    })
  }
}
