package com.web.bookshoppingmallt.jwt;

import org.springframework.security.core.GrantedAuthority;

public final class SimpleGrantedAuthority implements GrantedAuthority {
    @Override
    public String getAuthority() {
        return "";
    }
}
