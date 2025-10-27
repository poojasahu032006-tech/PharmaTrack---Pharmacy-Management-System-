package com.pharmatrack.service;

import com.pharmatrack.entity.Medicine;
import com.pharmatrack.repository.MedicineRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class MedicineService {
    private final MedicineRepository repo;
    public MedicineService(MedicineRepository repo){ this.repo = repo; }

    public List<Medicine> getAll(){ return repo.findAll(); }
    public Medicine get(Long id){ return repo.findById(id).orElse(null); }
    public Medicine save(Medicine m){ return repo.save(m); }
    public void delete(Long id){ repo.deleteById(id); }
}
