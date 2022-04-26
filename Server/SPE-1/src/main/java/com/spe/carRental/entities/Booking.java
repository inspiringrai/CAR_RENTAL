package com.spe.carRental.entities;

import com.spe.carRental.enums.CustomEnums;
import lombok.Getter;
import lombok.Setter;
import net.bytebuddy.implementation.bytecode.constant.DefaultValue;

import javax.persistence.*;
import java.util.Date;

@Entity
@Getter
@Setter
@Table(name = "bookings")
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    long id;
    @ManyToOne
    User user;
    @Temporal(TemporalType.DATE)
    Date fromDate;
    @Temporal(TemporalType.DATE)
    Date toDate;
    @ManyToOne
    Car car;
    boolean delivered;
    String name;
    long phone;
    String address;
    String docId;
    @Enumerated(EnumType.STRING)
    CustomEnums.IDTYPE idtype;

}
