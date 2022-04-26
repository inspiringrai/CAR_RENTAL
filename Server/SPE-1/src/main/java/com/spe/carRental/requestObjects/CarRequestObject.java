package com.spe.carRental.requestObjects;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CarRequestObject {
    String model;
    long price;
    long availableCars;
}
