package com.spe.carRental.controllers;

import com.spe.carRental.entities.Car;
import com.spe.carRental.enums.CustomEnums;
import com.spe.carRental.requestObjects.CarRequestObject;
import com.spe.carRental.requestObjects.SignUpRequestObject;
import com.spe.carRental.services.CarService;
import com.spe.carRental.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/admin")
public class AdminController {
    @Autowired
    private UserService userService;
    @Autowired
    private CarService carService;
    @PostMapping("/signup")
    public boolean signup(@RequestBody SignUpRequestObject request){
        return userService.createUser(request.getUserId(), request.getPassword(), CustomEnums.USERTYPE.ADMIN);
    }
    @PostMapping("/addCar")
    public boolean addCar(@RequestBody CarRequestObject request){
        return carService.addCar(request.getModel(),request.getPrice(), request.getAvailableCars());
    }

    @PostMapping("/updateCar")
    public boolean updateCar(@RequestBody Car request){
        return carService.updateCar(request);
    }
}
