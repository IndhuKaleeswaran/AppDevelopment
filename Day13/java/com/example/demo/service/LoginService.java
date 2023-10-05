package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.LoginEntity;
import com.example.demo.repository.LoginRepo;


@Service
public class LoginService implements LoginInt 
{
	@Autowired
    private LoginRepo loginRepository;
   @Override
   public List<LoginEntity> getLogin() 
   {
	  return loginRepository.findAll();
   }
   @Override
   public void saveLogin(LoginEntity le)
   {
	   loginRepository.save(le);
   }
   @Override
   public void updateLogin(LoginEntity le) 
   {
	   loginRepository.save(le);
   }
   @Override
   public void deleteLogin(int id) 
   {
	   loginRepository.deleteById(id);
   }
   @Override
   public List<LoginEntity> getAll(int id) 
   {
	  return loginRepository.getAll(id);
   }
}