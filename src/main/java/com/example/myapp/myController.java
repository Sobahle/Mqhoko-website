package com.example.myapp;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class myController {

    @GetMapping("/")
    public String showForm() {
        return "index";
    }

    @PostMapping("/submit")
    public String handleSubmit(@RequestParam String username) {
        System.out.println("Submitted username: " + username);
        return "redirect:/";
    }
}
