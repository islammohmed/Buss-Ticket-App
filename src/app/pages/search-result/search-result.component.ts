import { Component, Inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ISearchBus, Search } from '../../model/model';
import { SearchService } from '../../service/search.service';
import { CommonModule, DatePipe } from '@angular/common';
@Component({
  selector: 'app-search-result',
  imports: [CommonModule,DatePipe,RouterLink],
  templateUrl: './search-result.component.html',
  styleUrl: './search-result.component.css'
})
export class SearchResultComponent {
  searchObj:Search = new Search();
  searchResult:ISearchBus[]=[];
  
 constructor(private searchService:SearchService , private activatedRoute:ActivatedRoute){
    this.activatedRoute.params.subscribe((res:any)=>{
        this.searchObj.fromLocation = res.fromId;
        this.searchObj.toLocation = res.toId;
        this.searchObj.date = res.data;
        this.GetSearchResult();
    })
 }
 GetSearchResult(){
    this.searchService.searchBus(this.searchObj).subscribe((res:any)=>{
      this.searchResult = res;
      console.log(this.searchResult);
      debugger;
    })
 }

}
