package com.example.demo.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.demo.entity.DetailsEntity;
import java.util.List;
@Repository
public interface DetailsRepository extends JpaRepository<DetailsEntity, Long> {
    List<DetailsEntity> findAll();
}
