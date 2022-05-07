package com.spe.carRental.services;

import com.spe.carRental.entities.Booking;
import com.spe.carRental.entities.Car;
import com.spe.carRental.entities.User;
import com.spe.carRental.repository.BookingRepository;
import com.spe.carRental.repository.CarRepository;
import com.spe.carRental.repository.UserRepository;
import com.spe.carRental.requestObjects.BookingRequest;
import lombok.SneakyThrows;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.Date;

@Service
public class BookingServiceImplementation implements  BookingService{
    @Autowired
    BookingRepository bookingRepository;
    @Autowired
    CarRepository carRepository;
    @Autowired
    UserRepository userRepository;

    @SneakyThrows //TODO: Handle exceptions properly
    @Override
    public long getAvailableCars(String fromDate, String toDate, long id){

        Date parsedFromDate = new SimpleDateFormat("dd/MM/yyyy").parse(fromDate);
        Date parsedToDate = new SimpleDateFormat("dd/MM/yyyy").parse(toDate);
        Car car = carRepository.findById(id);
        if(car==null) return 0;
        return car.getAvailableCars()-bookingRepository.countByFromDateAndToDateAndCar(parsedFromDate,parsedToDate,car);
    }

    @SneakyThrows //TODO: Handle exceptions properly
    @Override
    public boolean makeBooking(BookingRequest request){
        Date parsedFromDate = new SimpleDateFormat("dd/MM/yyyy").parse(request.getFromDate());
        Date parsedToDate = new SimpleDateFormat("dd/MM/yyyy").parse(request.getToDate());
        User user = userRepository.findById(request.getUserId());
        Car car = carRepository.findById(request.getCarId());
        if(user==null||car==null) return false;
        if(car.getAvailableCars()-bookingRepository.countByFromDateAndToDateAndCar(parsedFromDate,parsedToDate,car)<=0) return false;
        Booking booking = new Booking();
        booking.setUser(user);
        booking.setFromDate(parsedFromDate);
        booking.setToDate(parsedToDate);
        booking.setCar(car);
        booking.setDelivered(false);
        booking.setName(request.getName());
        booking.setPhone(request.getPhone());
        booking.setAddress(request.getAddress());
        booking.setDocId(request.getDocId());
        booking.setIdtype(request.getIdType());
        bookingRepository.save(booking);
        return true;
    }
}
