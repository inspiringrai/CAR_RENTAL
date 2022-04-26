package com.spe.carRental.services;

import com.spe.carRental.entities.Car;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface CarService {
    boolean updateCar(Car request);
    boolean addCar(String model, long price, long numberOfCars);
    List<Car> getCars();
}
