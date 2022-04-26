package com.spe.carRental.services;

import com.spe.carRental.enums.CustomEnums;
import com.spe.carRental.requestObjects.SignUpRequestObject;
import com.spe.carRental.responseObjects.SignInResponseObject;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

@Service
public interface UserService {
    boolean createUser(String userid, String password, CustomEnums.USERTYPE usertype);
    SignInResponseObject signIn(String userid, String password);
}
