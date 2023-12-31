package com.example.demo.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="login")
public class LoginEntity
{
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id")
    private int id;
	@Column(name="username")
	private String username;
	@Column(name="password")
	private String password;
   public int getId() {
	return id;
}
public void setId(int id) {
	this.id = id;
}
public LoginEntity() {
	super();
}
   public String getUsername() 
   {
	return username;
   }
   public void setUsername(String username) 
   {
	this.username = username;
   }
   public String getPassword() 
   {
	return password;
   }
   public void setPassword(String password)
   {
	this.password = password;
   }
   public LoginEntity(int id,String username, String password) {
	   super();
	   this.id = id;
	   this.username = username;
	   this.password = password;
   }
}