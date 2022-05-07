package com.spe.carRental.responseObjects;

import com.spe.carRental.enums.CustomEnums;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SignInResponseObject {
    CustomEnums.USERTYPE usertype;
    long id;
}
