package com.inventory.backend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.inventory.backend.Model.UserModel;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<UserModel, Long> {
    List<UserModel> findByRole(UserModel.Role role);

    UserModel findByEmail(String email);
}
