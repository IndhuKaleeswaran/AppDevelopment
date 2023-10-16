package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.demo.entity.DetailsEntity;
import com.example.demo.service.DetailsService;
import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/auth/api/details")
public class DetailsController {
    private final DetailsService detailsService;

    @Autowired
    public DetailsController(DetailsService detailsService) {
        this.detailsService = detailsService;
    }

    @PostMapping
    public DetailsEntity saveDetails(@RequestBody DetailsEntity detailsEntity) {
        return detailsService.saveDetails(detailsEntity);
    }

    @GetMapping("/{id}")
    public DetailsEntity getDetailsById(@PathVariable Long id) {
        return detailsService.getDetailsById(id);
    }

    @GetMapping
    public List<DetailsEntity> getAllDetails() {
        return detailsService.getAllDetails();
    }

    @PutMapping("/{id}")
    public DetailsEntity updateDetails(@PathVariable Long id, @RequestBody DetailsEntity detailsEntity) {
        return detailsService.updateDetails(id, detailsEntity);
    }

    @DeleteMapping("/{id}")
    public void deleteDetails(@PathVariable Long id) {
        detailsService.deleteDetails(id);
    }
}
