package com.spe.carRental.services;

import com.spe.carRental.entities.User;
import com.spe.carRental.enums.CustomEnums;
import com.spe.carRental.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImplementation implements UserService{
    @Autowired
    UserRepository userRepository;
    @Override
    public boolean createUser(String userid, String password, CustomEnums.USERTYPE usertype){

        if(userRepository.existsByUserid(userid)) return false;

        User user = new User();
        user.setUserid(userid);
        user.setPassword(password);
        user.setUserType(usertype);
        userRepository.save(user);
        return true;
    }
}
