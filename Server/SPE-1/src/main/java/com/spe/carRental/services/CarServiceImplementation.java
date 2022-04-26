package com.spe.carRental.services;

import com.spe.carRental.entities.Car;
import com.spe.carRental.repository.CarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CarServiceImplementation implements CarService{
    @Autowired
    private CarRepository carRepository;

    @Override
    public boolean addOrUpdateCar(String model, long price, long numberOfCars) {
        Car car =  carRepository.findByModel(model);
        if(car==null){
            car = new Car();
            car.setAvailableCars(numberOfCars);
            car.setModel(model);
            car.setPrice(price);
            carRepository.save(car);
            return true;
        }
        car.setAvailableCars(numberOfCars);
        car.setPrice(price);
        carRepository.save(car);
        return true;
    }

    @Override
    public List<Car> getCars(){
        return carRepository.findAll();
    }
}
