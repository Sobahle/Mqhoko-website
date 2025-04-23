package com.example.myapp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Controller
public class MyController {

    @Autowired
    private UsernameRepository usernameRepository;

    @GetMapping("/")
    public String showForm(Model model) {
        List<Username> allUsernames = usernameRepository.findAll();
        model.addAttribute("usernames", allUsernames);
        return "index";
    }

    @PostMapping("/submit")
    public String handleSubmit(@RequestParam String username) {
        if (username != null && !username.trim().isEmpty()) {
            usernameRepository.save(new Username(username));
        }
        return "redirect:/";
    }
}
