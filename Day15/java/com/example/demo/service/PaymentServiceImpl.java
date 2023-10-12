package com.example.demo.service;

import com.example.demo.entity.PaymentEntity;
import com.example.demo.repository.PaymentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PaymentServiceImpl implements PaymentService {
    private final PaymentRepo paymentRepository;

    @Autowired
    public PaymentServiceImpl(PaymentRepo paymentRepository) {
        this.paymentRepository = paymentRepository;
    }

    @Override
    public List<PaymentEntity> getAllPayments() {
        return paymentRepository.findAll();
    }

    @Override
    public Optional<PaymentEntity> getPaymentById(Long id) {
        return paymentRepository.findById(id);
    }

    @Override
    public PaymentEntity createPayment(PaymentEntity paymentEntity) {
        return paymentRepository.save(paymentEntity);
    }

    @Override
    public PaymentEntity updatePayment(Long id, PaymentEntity paymentEntity) {
        if (paymentRepository.existsById(id)) {
            paymentEntity.setPaymentId(id); // Set the ID for the update
            return paymentRepository.save(paymentEntity);
        } else {
            return null; 
        }
    }

    @Override
    public void deletePayment(Long id) {
        paymentRepository.deleteById(id);
    }
}
