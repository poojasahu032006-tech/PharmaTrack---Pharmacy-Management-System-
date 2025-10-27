package com.pharmatrack.service;

import com.pharmatrack.entity.Sale;
import com.pharmatrack.repository.SaleRepository;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Map;
import java.util.HashMap;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.time.Month;

@Service
public class SaleService {

    private final SaleRepository saleRepository;

    public SaleService(SaleRepository saleRepository) {
        this.saleRepository = saleRepository;
    }

    public List<Map<String, Object>> getAllSales(String month) {
        List<Sale> sales = saleRepository.findAll();
        
        return sales.stream()
            .filter(sale -> {
                if (month == null || month.isEmpty()) {
                    return true;
                }
                try {
                    Month targetMonth = Month.valueOf(month.toUpperCase());
                    return sale.getSaleDate().getMonth() == targetMonth;
                } catch (IllegalArgumentException e) {
                    return true;
                }
            })
            .map(this::convertToMap)
            .toList();
    }

    private Map<String, Object> convertToMap(Sale sale) {
        Map<String, Object> saleMap = new HashMap<>();
        saleMap.put("id", sale.getId());
        saleMap.put("medicineName", "Sample Medicine"); // This would come from sale items
        saleMap.put("quantity", 1); // This would be calculated from sale items
        saleMap.put("totalPrice", sale.getTotalAmount());
        saleMap.put("date", sale.getSaleDate().format(DateTimeFormatter.ISO_LOCAL_DATE));
        return saleMap;
    }

    public Sale getSale(Long id) {
        return saleRepository.findById(id).orElse(null);
    }

    public Sale save(Sale sale) {
        if (sale.getSaleDate() == null) {
            sale.setSaleDate(LocalDateTime.now());
        }
        return saleRepository.save(sale);
    }

    public void delete(Long id) {
        saleRepository.deleteById(id);
    }
}
