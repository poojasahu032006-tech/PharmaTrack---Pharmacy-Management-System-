package com.pharmatrack.dto;

/**
 * Data Transfer Object (DTO) for handling incoming login requests from the frontend.
 * This structure maps directly to the JSON payload: { "username": "...", "password": "..." }
 */
public class LoginRequest {
    private String username;
    private String password;

    // Default constructor is needed for JSON deserialization by Spring
    public LoginRequest() {}

    public LoginRequest(String username, String password) {
        this.username = username;
        this.password = password;
    }

    // Getters and Setters (REQUIRED for Spring/Jackson mapping)
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
