package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.LoginEntity;
import com.example.demo.service.LoginService;

@RestController
@CrossOrigin("*")
public class LoginController 
{
	@Autowired
    private LoginService loginService;
	
    @GetMapping("/loginget")
    public List<LoginEntity>getLoginDetails1()
    {
    	return loginService.getLogin();
    }
    
    @GetMapping("/loginget1")
	public List<LoginEntity> getAllDetails(@RequestParam int id)
	{
		return loginService.getAll(id);
	}
    @PostMapping("/loginpost")
    public void saveDetails(@RequestBody LoginEntity le)
    {
    	loginService.saveLogin(le);
    }
    
    @PutMapping("/loginput")
    public void updateDetails(@RequestBody LoginEntity le,@RequestParam int id)
    {
    	le.setId(id);
    	loginService.updateLogin(le);
    }
    
    @DeleteMapping("/logindelete")
    public void deleteDetails(@RequestParam int id)
    {
    	loginService.deleteLogin(id);
    }
}