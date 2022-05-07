package com.spe.carRental.services;

import com.spe.carRental.entities.Car;
import com.spe.carRental.requestObjects.BookingRequest;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public interface BookingService {
    long getAvailableCars(String fromDate, String toDate, long Id);
    boolean makeBooking(BookingRequest request);
}
