package com.spe.carRental.requestObjects;

import com.spe.carRental.entities.Car;
import com.spe.carRental.entities.User;
import com.spe.carRental.enums.CustomEnums;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Getter
@Setter
public class BookingRequest {
    long userId;
    long carId;
    String fromDate;
    String toDate;
    String name;
    long phone;
    String address;
    String docId;
    CustomEnums.IDTYPE idType;

}
