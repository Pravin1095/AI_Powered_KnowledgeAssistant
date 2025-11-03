package com.example.resumeReader.demo.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@NoArgsConstructor
@Document(collection = "resumes")
public class resumeStore {
    @Id
    private String id;

    private String jobDescription;
//    private byte[] resumeData;

}
