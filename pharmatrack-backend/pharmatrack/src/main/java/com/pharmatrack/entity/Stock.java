package com.pharmatrack.entity;

import jakarta.persistence.*;
import lombok.Data;
import java.math.BigDecimal;
import java.time.LocalDate;

@Entity
@Data
public class Stock {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "medicine_id")
    private Medicine medicine;

    private String batchNumber;
    private int quantity;
    private LocalDate expiryDate;
    private BigDecimal purchasePrice;
}
