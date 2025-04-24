package com.example.myapp;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.myapp.model.Username;

public interface UsernameRepository extends JpaRepository<Username, Long> {
}
