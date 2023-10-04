package com.example.demo.entity;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Students 
{
  @Id
  @GeneratedValue(strategy=GenerationType.AUTO)
  private int student_id;
  private String student_name;
  private String department;
  private String email;
  private String password;
  private Date dob;
  private String gender;
  private String quota;
  private String address;
  private long contact_number;
  private int age;
  private int yearofstudy;
  private long feespaid;
  private long totalfees;

  
}
