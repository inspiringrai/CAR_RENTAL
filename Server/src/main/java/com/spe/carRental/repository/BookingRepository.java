package com.spe.carRental.repository;

import com.spe.carRental.entities.Booking;
import com.spe.carRental.entities.Car;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Date;

public interface BookingRepository extends JpaRepository<Booking,Long> {
    @Query(value = "select COUNT(*) from Booking where car=:car and ((fromDate<=:fromDate and :fromDate<=toDate) or (fromDate<=:toDate and :toDate<=toDate) or (:fromDate<=fromDate and fromDate<=:toDate) or (:fromDate<=toDate and toDate<=:toDate))",nativeQuery = true)
    long countByFromDateAndToDateAndCar(Date fromDate, Date toDate, Car car);
}