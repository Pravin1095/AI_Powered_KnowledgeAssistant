package com.example.resumeReader.demo.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.example.resumeReader.demo.model.resumeStore;


public interface ResumeRepository extends MongoRepository<resumeStore, String> {
}
