import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-education-page',
  templateUrl: './education-page.component.html',
  styleUrls: ['./education-page.component.css'],
})
export class EducationPageComponent implements OnInit {
  ngOnInit(): void {
    AOS.init();
  }
}
