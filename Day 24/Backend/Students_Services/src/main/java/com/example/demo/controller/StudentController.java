package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.entity.Students;
import com.example.demo.service.StudentService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/students")
public class StudentController {

	@Autowired
    private  StudentService studentService;

    @GetMapping
    public List<Students> getAllStudents() {
        return studentService.getAllStudents();
    }
    @GetMapping("/unique/departments")
    public List<String> getUniqueDepartments() {
        return studentService.getUniqueDepartments();
    }
    @GetMapping("/department/{department}/year/{year}")
    public List<Students> getStudentsByDepartmentAndYear(@PathVariable String department, @PathVariable String year) {
        return studentService.getStudentsByDepartmentAndYear(department, year);
    }
    @GetMapping("/{id}")
    public Optional<Students> getStudentById(@PathVariable int id) {
        return studentService.getStudentById(id);
    }

    @PostMapping
    public Students createStudent(@RequestBody Students student) {
        return studentService.createStudent(student);
    }

    @PutMapping("/{id}")
    public Students updateStudent(@PathVariable int id, @RequestBody Students updatedStudent) {
        return studentService.updateStudent(id, updatedStudent);
    }

    @DeleteMapping("/{id}")
    public void deleteStudent(@PathVariable int id) {
        studentService.deleteStudent(id);
    }
}
