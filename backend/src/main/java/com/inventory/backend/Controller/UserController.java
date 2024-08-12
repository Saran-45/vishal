package com.inventory.backend.Controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.inventory.backend.Model.UserModel;
import com.inventory.backend.Service.UserService;

import java.util.List;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping
    public List<UserModel> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/{id}")
    public UserModel getUserById(@PathVariable Long id) {
        return userService.getUserById(id);
    }

    @GetMapping("/role/{role}")
    public List<UserModel> getUsersByRole(@PathVariable UserModel.Role role) {
        return userService.getUsersByRole(role);
    }

    @PostMapping
    public UserModel createUser(@RequestBody UserModel user) {
        return userService.saveUser(user);
    }

    @PutMapping("/{id}")
    public UserModel updateUser(@PathVariable Long id, @RequestBody UserModel user) {
        user.setId(id);
        return userService.saveUser(user);
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
    }
    // @PostMapping("/signup")
    // public UserModel signup(@RequestBody UserModel user) {
    //     return userService.saveUser(user);
    // }

    // @PostMapping("/login")
    // public UserModel login(@RequestBody UserModel user) {
    //     UserModel existingUser = userService.getUserByEmail(user.getEmail());
    //     if (existingUser != null && existingUser.getPassword().equals(user.getPassword())) {
    //         return existingUser;
    //     } else {
    //         throw new RuntimeException("Invalid credentials");
    //     }
    // }
}
