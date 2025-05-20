import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { Search } from '../../model/model';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  imports: [CommonModule,FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {
  http = inject(HttpClient);
  router=inject(Router)
  locationList:any[]=[]
  searchObj:Search=new Search()
  ngOnInit(): void {
    this.getAllLocations()
 
  }
  getAllLocations(){
    this.http.get("https://api.freeprojectapi.com/api/BusBooking/GetBusLocations").subscribe((res:any)=>{
      this.locationList=res
    })
  }
  searchBus(){
        this.http.get(`https://api.freeprojectapi.com/api/BusBooking/searchBus?fromLocation=${this.searchObj.fromLocation}&toLocation=${this.searchObj.toLocation}&travelDate=${this.searchObj.date}`).subscribe((res:any)=>{
      console.log(res);
      this.router.navigate(["/search-results",this.searchObj.fromLocation,this.searchObj.toLocation,this.searchObj.date])
    })
  }
}   

