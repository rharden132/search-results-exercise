import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  searchResults: String[] = [];
  newSearch: String = "";
  displayResults(){
    this.searchResults.push(this.newSearch);
    console.log(this.newSearch, this.searchResults)

  }
}
