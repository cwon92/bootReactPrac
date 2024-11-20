package com.test.webapp.jpa;

import org.springframework.data.jpa.repository.JpaRepository;

import com.test.webapp.user.User;

public interface UserRepository extends JpaRepository<User, Integer>{

}
