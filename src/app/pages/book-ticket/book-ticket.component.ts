import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../../service/search.service';
import { BusBookingPassenger, IScheduleData, Root } from '../../model/model';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-book-ticket',
  imports: [CommonModule, DatePipe, FormsModule],
  templateUrl: './book-ticket.component.html',
  styleUrl: './book-ticket.component.css'
})
export class BookTicketComponent {
  activatedRoute = inject(ActivatedRoute);
  searchService = inject(SearchService);
  scheduleData!: IScheduleData;
  seats: number[] = [];
  selectedSeatArray: BusBookingPassenger[] = [];
  scheduleId: number = 0;
  bookedSeatList: BusBookingPassenger[] = [];
  bookingData: Root = new Root();

  constructor() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.scheduleId = params.scheduleId;
      this.bookingData.scheduleId = this.scheduleId;
      this.getBusDetails(this.scheduleId);
      this.getBookingDetails(this.scheduleId);
    });
  }

  getBusDetails(scheduleId: number) {
    this.searchService.getBusSchedule(scheduleId).subscribe((res: IScheduleData) => {
      this.scheduleData = res;
      for (let i = 0; i < this.scheduleData.totalSeats; i++) {
        this.seats.push(i);
      }
    });
  }

  selectSeat(seat: number) {
    this.selectedSeatArray.push({
      seatNo: seat,
      passengerId: 0,
      bookingId: 0,
      passengerName: '',
      age: 0,
      gender: ''
    });
  }

  checkIfBooked(seat: number) {
    return this.bookedSeatList.findIndex(s => s.seatNo === seat) !== -1;
  }

  checkIfSeatIsSelected(seat: number) {
    return this.selectedSeatArray.findIndex(s => s.seatNo === seat) !== -1;
  }

  bookTicket() {
    this.bookingData.busBookingPassengers = this.selectedSeatArray;
    this.bookingData.bookingDate=new Date();
    this.bookingData.custId=10017;
    this.searchService.bookTicket(this.bookingData).subscribe((res: any) => {
      // Use a Bootstrap modal for a prettier alert
      const modal = document.createElement('div');
      modal.innerHTML = `
        <div class="modal fade show" tabindex="-1" style="display: block; background: rgba(0,0,0,0.5);">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header bg-success text-white">
                <h5 class="modal-title"><i class="bi bi-check-circle-fill me-2"></i>Success</h5>
                <button type="button" class="btn-close" aria-label="Close"></button>
              </div>
              <div class="modal-body text-center">
                <p class="mb-0 fs-5">Ticket Booked Successfully!</p>
              </div>
              <div class="modal-footer justify-content-center">
                <button type="button" class="btn btn-success px-4">OK</button>
              </div>
            </div>
          </div>
        </div>
      `;
      document.body.appendChild(modal);

      const closeModal = () => {
        modal.remove();
      };
      modal.querySelector('.btn-close')?.addEventListener('click', closeModal);
      modal.querySelector('.btn.btn-success')?.addEventListener('click', closeModal);
    });
  }

  getBookingDetails(bookingId: number) {
    this.searchService.getBookingDetails(bookingId).subscribe((res: any) => {
      this.bookedSeatList = res;
    });
  }

  trackSeat(index: number, item: BusBookingPassenger): any {
    return item.seatNo;
  }
}
