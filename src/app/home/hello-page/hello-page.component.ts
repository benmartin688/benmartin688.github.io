import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-hello-page',
  templateUrl: './hello-page.component.html',
  styleUrls: ['./hello-page.component.css'],
})
export class HelloPageComponent implements OnInit {
  ngOnInit(): void {
    AOS.init();
  }
}
