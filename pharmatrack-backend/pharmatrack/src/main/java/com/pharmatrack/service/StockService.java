package com.pharmatrack.service;

import com.pharmatrack.entity.Stock;
import com.pharmatrack.repository.StockRepository;
import org.springframework.stereotype.Service;
import java.time.LocalDate;
import java.util.List;

@Service
public class StockService {
    private final StockRepository repo;
    public StockService(StockRepository repo){ this.repo = repo; }

    public List<Stock> getAll(){ return repo.findAll(); }
    public List<Stock> getExpiringSoon(int days){ 
        return repo.findByExpiryDateBefore(LocalDate.now().plusDays(days));
    }
    public Stock save(Stock s){ return repo.save(s); }
    public void delete(Long id){ repo.deleteById(id); }
}
