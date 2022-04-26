package com.spe.carRental.controllers;

import com.spe.carRental.entities.Car;
import com.spe.carRental.enums.CustomEnums;
import com.spe.carRental.requestObjects.SignUpRequestObject;
import com.spe.carRental.responseObjects.SignInResponseObject;
import com.spe.carRental.services.CarService;
import com.spe.carRental.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserService userService;
    @Autowired
    private CarService carService;
    @GetMapping("/signin")
    public SignInResponseObject signIn(String userId, String password){
        return userService.signIn(userId, password);
    }

    @GetMapping("/getCars")
    public List<Car> getCars(){
        return carService.getCars();
    }
}
