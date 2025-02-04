package com.test.webapp.security;


import static org.springframework.security.config.Customizer.withDefaults;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SpringSecurityConfiguration {
	
	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		
//		1) All requests should be authenticated
		http.authorizeHttpRequests(
				auth -> auth.anyRequest().authenticated() //모든 요청에 인증 필요하게 설정
				);
//		2) If a request is not authenticated, a web page is shown
		http.httpBasic(withDefaults());
		
//		3) CSRF -> POST, PUT
		http.csrf().disable();

		
		return http.build();
	}

}
