package com.web.bookshoppingmallt.repository;

import com.web.bookshoppingmallt.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, String> {
     public boolean existsByEmailAndPassword(String email, String password);
//     boolean existsById(String email);
}
