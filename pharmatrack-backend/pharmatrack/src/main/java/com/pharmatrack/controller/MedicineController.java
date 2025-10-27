package com.pharmatrack.controller;

import com.pharmatrack.entity.Medicine;
import com.pharmatrack.service.MedicineService;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/medicines")
@CrossOrigin(origins = "http://localhost:5173")
public class MedicineController {

    private final MedicineService service;

    public MedicineController(MedicineService service) {
        this.service = service;
    }

    @GetMapping
    public List<Medicine> list(@RequestParam(required = false) String q) {
        if (q != null && !q.isEmpty()) {
            return service.getAll().stream()
                .filter(m -> m.getName().toLowerCase().contains(q.toLowerCase()))
                .toList();
        }
        return service.getAll();
    }

    @GetMapping("/{id}")
    public Medicine get(@PathVariable Long id) {
        return service.get(id);
    }

    @PostMapping
    public Medicine add(@RequestBody Medicine m) {
        return service.save(m);
    }

    @PutMapping("/{id}")
    public Medicine update(@PathVariable Long id, @RequestBody Medicine m) {
        m.setId(id);
        return service.save(m);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }
}