import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  searchValue = '';
  constructor() {}

  ngOnInit(): void {}
  onSearch(data: string) {
    console.log(this.searchValue, data);
  }
}
