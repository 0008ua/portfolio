import { StoreService } from './../../services/store.service';
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
  @ViewChild('top') top: ElementRef;
  mainTechnologies = mainTechnologies;
  projects = projects;
  currentMoveIndex: number;

  constructor(
    private storeService: StoreService,
  ) { }

  ngOnInit(): void {
    this.storeService.elementOnScreenIdxHandler()
      .subscribe(idx => this.currentMoveIndex = idx)
  }

  moveTo(isMoveDown: boolean) {
    if (isMoveDown) {
      this.storeService.elementOnScreenIdx(this.currentMoveIndex + 1);
    } else {
      this.storeService.elementOnScreenIdx(this.currentMoveIndex - 1);
    }

    // prevent move lower
    if (this.currentMoveIndex >= this.projectComponents.length) {
      this.storeService.elementOnScreenIdx(this.projectComponents.length  - 1);
      return;
    }

    // prevent move upper
    if (this.currentMoveIndex < -1) {
      this.storeService.elementOnScreenIdx(-1);
      return;
    }

    // move top
    if (this.currentMoveIndex === -1) {
      this.moveToTop();
      return;
    }

    // move to child component order number === index
    this.projectComponents.forEach((el, idx) => {
      if (idx === this.currentMoveIndex) {
        el.moveTo();
      }
    });
  }

  moveToTop() {
    const headerOffset = 45;
    const elementPosition = this.top.nativeElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
    // this.top.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  ngAfterViewInit() {
    this.tooltips.map((el) => {
      new Tooltip(el.nativeElement, {
        container: 'body'
      });
    });
    this.moveToTop();
  }
}
