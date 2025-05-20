import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IScheduleData, Root, Search } from '../model/model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
apiUrl:string="https://api.freeprojectapi.com/api/BusBooking"
  constructor(private http:HttpClient) {

   }
   searchBus(searchObj:Search){
    return this.http.get(`${this.apiUrl}/searchBus?fromLocation=${searchObj.fromLocation}&toLocation=${searchObj.toLocation}&travelDate=${searchObj.date}`)
   }
   getBusSchedule(scheduleId:number) :Observable<IScheduleData>{
    return this.http.get<IScheduleData>(`${this.apiUrl}/GetBusScheduleById?id=${scheduleId}`)
   }
   bookTicket(obj:Root){
    return this.http.post(`${this.apiUrl}/PostBusBooking`,obj)
   }
   getBookingDetails(bookingId:number){
    return this.http.get(`${this.apiUrl}/getBookedSeats?shceduledId=${bookingId}`)
   }
}
