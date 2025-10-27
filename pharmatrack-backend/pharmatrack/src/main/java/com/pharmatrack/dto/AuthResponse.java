package com.pharmatrack.dto;

/**
 * Data Transfer Object (DTO) for sending the authentication response back to the frontend.
 * Matches what your Login.jsx component expects upon success.
 */
public class AuthResponse {
    private boolean success;
    private String token;
    private String message;

    public AuthResponse(boolean success, String token, String message) {
        this.success = success;
        this.token = token;
        this.message = message;
    }

    // Default constructor is needed for JSON deserialization by Spring
    public AuthResponse() {}

    // Getters and Setters (REQUIRED for Spring/Jackson mapping)
    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
