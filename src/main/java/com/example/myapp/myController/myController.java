package com.example.myapp.myController;

import com.example.myapp.UsernameRepository;
import com.example.myapp.model.Username;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.validation.annotation.Validated;


@Validated
@Controller
class MyController {

    @Autowired
    private UsernameRepository usernameRepository;

    @GetMapping("/index")
    public String showForm(Model model) {
        model.addAttribute("user", new Username());
        model.addAttribute("usernames", usernameRepository.findAll());
        return "index";
    }

    @PostMapping("/submit")
    public String handleSubmit(@Validated Username username, BindingResult result, Model model) {
        if (result.hasErrors()) {
            model.addAttribute("usernames", usernameRepository.findAll());
            return "index";
        }
        usernameRepository.save(username);
        return "redirect:/index";
    }
}

