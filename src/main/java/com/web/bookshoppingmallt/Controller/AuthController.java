package com.web.bookshoppingmallt.Controller;

import com.web.bookshoppingmallt.dto.LoginDto;
import com.web.bookshoppingmallt.dto.ResponseDto;
import com.web.bookshoppingmallt.dto.SignUpDto;
import com.web.bookshoppingmallt.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
//@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/auth")
public class AuthController {
    @Autowired
    AuthService authService;
    @PostMapping("/signUp")
    public ResponseDto<?> signUp(@RequestBody SignUpDto requestBody) {
        ResponseDto<?> result = authService.signUp(requestBody);
        return result;
    }

    @PostMapping("/login")
    public ResponseDto<?> login(@RequestBody LoginDto requestBody) {
        ResponseDto<?> result = authService.login(requestBody);
        return result;
    }
}
