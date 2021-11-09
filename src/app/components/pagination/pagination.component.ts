import { Component, OnInit } from '@angular/core';
import { PageService } from 'src/app/services/pageService/page.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  pagesArray: number[];
  totalPage = 20;
  currentPage = 1;

  constructor(private pageService: PageService) {
    this.pagesArray = Array.from({length: this.totalPage}, (_, i) => i + 1);
  }

  ngOnInit(): void {
    
  }

  getCurrentPage(page:number): void{
    this.currentPage = page;
  }

  getNextPage():void{
    if(this.currentPage < 20){
      this.currentPage += 1;
    }
  }

  getPreviousPage():void{
    if(this.currentPage > 1){
      this.currentPage -= 1;
    }
  }

  setCurrentPage():void{
    this.pageService.setPageValue(this.currentPage);
  }


}
