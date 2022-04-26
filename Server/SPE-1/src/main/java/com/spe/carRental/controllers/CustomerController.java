package com.spe.carRental.controllers;

import com.spe.carRental.enums.CustomEnums;
import com.spe.carRental.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/customer")
public class CustomerController {
    @Autowired
    private UserService userService;
    @PostMapping("/signup")
    public boolean signup(String userid , String password){
        return userService.createUser(userid,password, CustomEnums.USERTYPE.CUSTOMER);
    }
}
