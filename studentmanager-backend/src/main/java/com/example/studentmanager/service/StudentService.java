package com.example.studentmanager.service;

import com.example.studentmanager.exception.ResourceNotFoundException;
import com.example.studentmanager.model.Student;
import com.example.studentmanager.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {
    @Autowired
    private StudentRepository repository;

    public List<Student> findAllStudents(){
        return repository.findAll();
    }

    public Student saveStudent(Student student){
        return repository.save(student);
    }

    public Student findStudentById(Long id){
        return repository.findById(id).orElseThrow(() ->
                new ResourceNotFoundException("Student with id: " + id + " was not found"));
    }

    public Student updateStudent(Long id, Student student){
        Student existingStudent = repository.findById(id).orElseThrow(() ->
                new ResourceNotFoundException("Student with id: " + id + " was not found"));

        existingStudent.setFirstName(student.getFirstName());
        existingStudent.setLastName(student.getLastName());
        existingStudent.setIndex(student.getIndex());
        existingStudent.setEmail(student.getEmail());

        return repository.save(existingStudent);
    }

    public void deleteStudent(Long id){
        Student existingStudent = repository.findById(id).orElseThrow(() ->
                new ResourceNotFoundException("Student with id: " + id + " was not found"));

        repository.deleteById(id);
    }
}
