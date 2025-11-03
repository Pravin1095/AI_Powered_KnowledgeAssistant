package com.example.resumeReader.demo.controller;


import com.example.resumeReader.demo.repository.ResumeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.resumeReader.demo.model.resumeStore;

import java.util.List;

@RestController
@RequestMapping("api/v1/resumeupload")
@RequiredArgsConstructor
public class Test {
    @Autowired
ResumeRepository repo;
    @GetMapping
    public List<resumeStore> getDatum(){

        return repo.findAll();
    }
}
