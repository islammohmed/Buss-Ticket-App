import { Routes } from '@angular/router';
import { SearchComponent } from './pages/search/search.component';
import { SearchResultComponent } from './pages/search-result/search-result.component';
import { BookTicketComponent } from './pages/book-ticket/book-ticket.component';
import { MyBookingComponent } from './pages/my-booking/my-booking.component';
import { NotFoundError } from 'rxjs';
``
export const routes: Routes = [
    {
        path: '',
        redirectTo:"search",
        pathMatch:"full"
    },
    {
        path: "search",
        component: SearchComponent
    },
    {
        path: "search-results/:fromId/:toId/:data",
        component: SearchResultComponent
    },
    {
        path:"my-bookings",
        component: MyBookingComponent
    },
    {
        path:"booking/:scheduleId",
        component: BookTicketComponent
    }

];
