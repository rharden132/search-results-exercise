import { outputAst } from '@angular/compiler';
import { Component, ElementRef, EventEmitter, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  @Output() searched = new EventEmitter();
  ngOnInit(): void {
  }
  searchResults: String[] = [];
  newSearch: String = "";
  displayResults(){
    this.searchResults.push(this.newSearch);
    this.newSearch = null;
  }
}
