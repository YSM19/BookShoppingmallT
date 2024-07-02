package com.web.bookshoppingmallt.dto;

import com.web.bookshoppingmallt.entity.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class LoginResponseDto {

    private String token;
    private int exprTIme;
    private User user;

}
