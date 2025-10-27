package com.pharmatrack.controller;

import com.pharmatrack.entity.Sale;
import com.pharmatrack.service.SaleService;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/sales")
@CrossOrigin(origins = "http://localhost:5173")
public class SaleController {

    private final SaleService saleService;

    public SaleController(SaleService saleService) {
        this.saleService = saleService;
    }

    @GetMapping
    public List<Map<String, Object>> getSales(@RequestParam(required = false) String month) {
        return saleService.getAllSales(month);
    }

    @GetMapping("/{id}")
    public Sale getSale(@PathVariable Long id) {
        return saleService.getSale(id);
    }

    @PostMapping
    public Sale addSale(@RequestBody Sale sale) {
        return saleService.save(sale);
    }

    @PutMapping("/{id}")
    public Sale updateSale(@PathVariable Long id, @RequestBody Sale sale) {
        sale.setId(id);
        return saleService.save(sale);
    }

    @DeleteMapping("/{id}")
    public void deleteSale(@PathVariable Long id) {
        saleService.delete(id);
    }
}
