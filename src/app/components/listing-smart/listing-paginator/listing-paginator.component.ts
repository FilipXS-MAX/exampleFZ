import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listing-paginator',
  templateUrl: './listing-paginator.component.html',
  styleUrls: ['./listing-paginator.component.scss']
})
export class ListingPaginatorComponent implements OnInit {

  @Output("changePage") newPage: EventEmitter<string> = new EventEmitter<string>();
  @Input() numberOfPages: number = 0;

  /**
   * array with 5 numbers, which are nearest to actual page
   * in this array value 0 = out of range and it don't visible in paginator
  */ 
  public pages: number[] = [0, 0, 0, 0, 0];
  public actualPage: number = 1;

  constructor() { }

  ngOnInit(): void {
    this.fillPagesWith();
  }

  fillPagesWith() {
    for (let index = 0; index < this.pages.length; index++) {
      let newPage = this.actualPage + (index -2)

      if (newPage > 0 && newPage <= this.numberOfPages) {
        this.pages[index] = newPage;
      } else {
        this.pages[index] = 0
      }
      
    }
  }

  changePage(page: number) {
    this.actualPage = page
    this.newPage.emit(String(page));
  }

}
