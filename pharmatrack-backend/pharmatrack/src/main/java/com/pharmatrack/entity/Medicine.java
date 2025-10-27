package com.pharmatrack.entity;

import jakarta.persistence.*;
import lombok.Data;
import java.math.BigDecimal;
import java.time.LocalDate;

@Entity
@Data
public class Medicine {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String batchNo;
    private LocalDate expiryDate;
    private Integer quantity;
    private BigDecimal price;
}
