package com.example.demo.service;
import com.example.demo.entity.DetailsEntity;
import java.util.List;
public interface DetailsService {
    DetailsEntity saveDetails(DetailsEntity detailsEntity);
    DetailsEntity getDetailsById(Long id);
    List<DetailsEntity> getAllDetails();
    DetailsEntity updateDetails(Long id, DetailsEntity detailsEntity);
    void deleteDetails(Long id);
}
