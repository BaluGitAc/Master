// travel booking application functionality

class TravelBooking {
    constructor(destination, date, travelers) {
        this.destination = destination;
        this.date = date;
        this.tr travelers = travelers;
        this.bookingDetails = {};
    }

    bookTickets() {
        this.bookingDetails = {
            destination: this.destination,
            date: this.date,
            travelers: this.travelers,
        };
        console.log('Booking confirmed:', this.bookingDetails);
    }

    getBookingDetails() {
        return this.bookingDetails;
    }
}

// Example usage
const booking = new TravelBooking('Paris', '2023-05-20', 2);
booking.bookTickets();