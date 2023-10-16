package com.example.demo.service;



import com.example.demo.entity.FeedbackEntity;

import java.util.List;
import java.util.Optional;

public interface FeedbackService {
    List<FeedbackEntity> getAllFeedback();
    Optional<FeedbackEntity> getFeedbackById(Long id);
    FeedbackEntity createFeedback(FeedbackEntity feedback);
    Optional<FeedbackEntity> updateFeedback(Long id, FeedbackEntity updatedFeedback);
    void deleteFeedback(Long id);
}