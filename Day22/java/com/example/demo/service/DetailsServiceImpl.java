package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.entity.DetailsEntity;
import com.example.demo.repository.DetailsRepository;
import java.util.List;

@Service
public class DetailsServiceImpl implements DetailsService {
    private final DetailsRepository detailsRepository;

    @Autowired
    public DetailsServiceImpl(DetailsRepository detailsRepository) {
        this.detailsRepository = detailsRepository;
    }

    @Override
    public DetailsEntity saveDetails(DetailsEntity detailsEntity) {
        return detailsRepository.save(detailsEntity);
    }

    @Override
    public DetailsEntity getDetailsById(Long id) {
        return detailsRepository.findById(id).orElse(null);
    }

    @Override
    public List<DetailsEntity> getAllDetails() {
        return detailsRepository.findAll();
    }

    @Override
    public DetailsEntity updateDetails(Long id, DetailsEntity detailsEntity) {
        if (detailsRepository.existsById(id)) {
            detailsEntity.setId(id);
            return detailsRepository.save(detailsEntity);
        }
        return null; // Handle not found
    }

    @Override
    public void deleteDetails(Long id) {
        detailsRepository.deleteById(id);
    }
}
