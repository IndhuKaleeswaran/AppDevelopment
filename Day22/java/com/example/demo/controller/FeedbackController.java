package com.example.demo.controller;

import com.example.demo.entity.FeedbackEntity;
import com.example.demo.repository.FeedbackRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@CrossOrigin("*")
@RestController
@RequestMapping("auth/api/feedback")
public class FeedbackController {

    @Autowired
    private FeedbackRepository feedRepository;

    @GetMapping
    public List<FeedbackEntity> getAllFeedback() {
        return feedRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<FeedbackEntity> getFeedbackById(@PathVariable Long id) {
        Optional<FeedbackEntity> feedback = feedRepository.findById(id);
        if (feedback.isPresent()) {
            return ResponseEntity.ok(feedback.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public FeedbackEntity createFeedback(@RequestBody FeedbackEntity feedback) {
        return feedRepository.save(feedback);
    }

    @PutMapping("/{id}")
    public ResponseEntity<FeedbackEntity> updateFeedback(@PathVariable Long id, @RequestBody FeedbackEntity updatedFeedback) {
        Optional<FeedbackEntity> feedback = feedRepository.findById(id);
        if (feedback.isPresent()) {
            updatedFeedback.setId(id);
            return ResponseEntity.ok(feedRepository.save(updatedFeedback));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteFeedback(@PathVariable Long id) {
        Optional<FeedbackEntity> feedback = feedRepository.findById(id);
        if (feedback.isPresent()) {
            feedRepository.delete(feedback.get());
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}