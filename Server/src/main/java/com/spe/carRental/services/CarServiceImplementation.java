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
    public boolean updateCar(Car request) {
        Car car = carRepository.findById(request.getId());
        if(car==null) return false;

        car.setAvailableCars(request.getAvailableCars());
        car.setPrice(request.getPrice());
        car.setModel(request.getModel());
        carRepository.save(car);
        return true;
    }
    @Override
    public boolean addCar(String model, long price, long numberOfCars) {
        if(carRepository.existsByModel(model)) return false;
        Car car = new Car();
        car.setAvailableCars(numberOfCars);
        car.setModel(model);
        car.setPrice(price);
        carRepository.save(car);
        return true;
    }

    @Override
    public List<Car> getCars(){
        return carRepository.findAll();
    }
}
