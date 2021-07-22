import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `<h1>
    Page not found <br />
    <button mat-raised-button routerLink="/">
      Click here to go to Homepage
    </button>
  </h1>`,
  // templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss'],
})
export class PageNotFoundComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
