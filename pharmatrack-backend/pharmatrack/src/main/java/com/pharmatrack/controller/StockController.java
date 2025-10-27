package com.pharmatrack.controller;

import com.pharmatrack.entity.Stock;
import com.pharmatrack.service.StockService;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/stocks")
@CrossOrigin(origins = "http://localhost:5173")
public class StockController {
    
    private final StockService service;

    public StockController(StockService service) { 
        this.service = service; 
    }

    // GET /api/stocks - Get all stock items
    @GetMapping
    public List<Stock> all() { 
        return service.getAll(); 
    }

    // GET /api/stocks/expiring?days={days} - Get stock expiring within a given number of days
    @GetMapping("/expiring")
    public List<Stock> expiring(@RequestParam(defaultValue = "30") int days) {
        return service.getExpiringSoon(days);
    }

    // POST /api/stocks - Add a new stock item
    @PostMapping
    public Stock save(@RequestBody Stock s) { 
        return service.save(s); 
    }

    // DELETE /api/stocks/{id} - Delete a stock item by ID
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) { 
        service.delete(id); 
    }
}