package com.pharmatrack.repository;

import com.pharmatrack.entity.Sale;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SaleRepository extends JpaRepository<Sale, Long> { }
