package com.spe.carRental.entities;

import com.spe.carRental.enums.CustomEnums;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@Table(name ="users")
public class User{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    long id;
    @Column(unique = true)
    String userid;
    String password;
    @Enumerated(EnumType.STRING)
    CustomEnums.USERTYPE userType;
}
