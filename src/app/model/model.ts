export class Search{
    fromLocation:string;
    toLocation:string;
    date:string;
    constructor(){
        this.fromLocation="";
        this.toLocation="";
        this.date="";
    }
}
export interface ISearchBus{
    availableSeats: number;
    totalSeats: number;
    price: number;
    arrivalTime: string;
    scheduleId: number;
    departureTime: string;
    busName: string;
    busVehicleNo: string;
    fromLocationName: string | null;
    toLocationName: string | null;
    vendorName: string | null;
    scheduleDate: string;
    vendorId: number;
}
export interface IScheduleData{
    availableSeats: number;
    totalSeats: number;
    price: number;
    arrivalTime: string;
    scheduleId: number;
    departureTime: string;
    busName: string;
    busVehicleNo: string;
    fromLocationName: string | null;
    toLocationName: string | null;
    vendorName: string | null;
    scheduleDate: string;
    vendorId: number;
}
export class BusBookingPassenger {
    passengerId: number;
    bookingId: number;
    passengerName: string;
    age: number;
    gender: string;
    seatNo: number;
    constructor(){
        this.passengerId=0;
        this.bookingId=0;
        this.passengerName="";
        this.age=0;
        this.gender="";
        this.seatNo=0;
    }
}

export class Root {
    bookingId: number;
    custId: number;
    bookingDate: Date;
    scheduleId: number;
    busBookingPassengers: BusBookingPassenger[];
    constructor(){
        this.bookingId=0;
        this.custId=0;
        this.bookingDate=new Date();
        this.scheduleId=0;
        this.busBookingPassengers=[];
    }
}