package com.spe.carRental.services;

import com.spe.carRental.entities.User;
import com.spe.carRental.enums.CustomEnums;
import com.spe.carRental.repository.UserRepository;
import com.spe.carRental.responseObjects.SignInResponseObject;
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

    @Override
    public SignInResponseObject signIn(String userid, String password){
        User user = userRepository.getByUseridAndPassword(userid,password);
        if(user==null) return null;
        SignInResponseObject response = new SignInResponseObject();
        response.setId(user.getId());
        response.setUsertype(user.getUserType());
        return response;
    }
}
