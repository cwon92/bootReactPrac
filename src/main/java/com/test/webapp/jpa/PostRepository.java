package com.test.webapp.jpa;

import org.springframework.data.jpa.repository.JpaRepository;

import com.test.webapp.user.Post;

public interface PostRepository extends JpaRepository<Post, Integer>{

}
