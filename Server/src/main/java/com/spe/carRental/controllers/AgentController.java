package com.spe.carRental.controllers;

import com.spe.carRental.enums.CustomEnums;
import com.spe.carRental.requestObjects.SignUpRequestObject;
import com.spe.carRental.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/agent")
public class AgentController {
    @Autowired
    private UserService userService;
    @PostMapping("/signup")
    public boolean signup(@RequestBody SignUpRequestObject request){
        return userService.createUser(request.getUserId(), request.getPassword(), CustomEnums.USERTYPE.AGENT);
    }
}
