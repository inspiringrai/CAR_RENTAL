package com.spe.carRental.controllers;

import com.spe.carRental.enums.CustomEnums;
import com.spe.carRental.requestObjects.BookingRequest;
import com.spe.carRental.requestObjects.SignUpRequestObject;
import com.spe.carRental.services.BookingService;
import com.spe.carRental.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/customer")
public class CustomerController {
    @Autowired
    private UserService userService;

    @Autowired
    private BookingService bookingService;

    @PostMapping("/signup")
    public boolean signup(@RequestBody SignUpRequestObject request){
        return userService.createUser(request.getUserId(), request.getPassword(), CustomEnums.USERTYPE.CUSTOMER);
    }

    @GetMapping("/getAvailableCars")
    public long getAvailableCars(String fromDate, String toDate, long id){
        return bookingService.getAvailableCars(fromDate, toDate, id);
    }
    @PostMapping("/makeBooking")
    public boolean makeBooking(BookingRequest request){
        return bookingService.makeBooking(request);
    }


}
