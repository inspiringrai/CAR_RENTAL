package com.spe.carRental.repository;

import com.spe.carRental.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
    boolean existsByUserid(String userid);
    User getByUseridAndPassword(String userId, String password);
}
