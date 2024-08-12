package com.inventory.backend.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.inventory.backend.Model.UserModel;
import com.inventory.backend.Repository.UserRepository;

import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public List<UserModel> getAllUsers() {
        return userRepository.findAll();
    }

    public UserModel getUserById(Long id) {
        return userRepository.findById(id).orElse(null);
    }

    public UserModel saveUser(UserModel user) {
        return userRepository.save(user);
    }

    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }

    public List<UserModel> getUsersByRole(UserModel.Role role) {
        return userRepository.findByRole(role);
    }

    // public UserModel getUserByEmail(String email) {
    //     return userRepository.findByEmail(email);
    // }
}
