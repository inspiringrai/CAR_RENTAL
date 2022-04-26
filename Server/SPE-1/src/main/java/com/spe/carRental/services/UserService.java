package com.spe.carRental.services;

import com.spe.carRental.enums.CustomEnums;
import org.springframework.stereotype.Service;

@Service
public interface UserService {
    boolean createUser(String userid, String password, CustomEnums.USERTYPE usertype);
}
