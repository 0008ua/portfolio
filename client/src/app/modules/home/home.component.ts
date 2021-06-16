import { AfterViewInit, Component, Directive, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { projects, technologies } from '../../app.data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  projects = projects;

  constructor() { }

  ngOnInit(): void {
  }

}
