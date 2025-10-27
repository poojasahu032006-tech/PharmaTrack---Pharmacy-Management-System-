package com.pharmatrack.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.HashMap;

@RestController
@RequestMapping("/api/auth")
// 🚨 FIXED: Change "*" to your specific frontend origin (e.g., http://localhost:5173 or 3000)
@CrossOrigin(origins = "http://localhost:5173") 
public class AuthController {

    @PostMapping("/login")
    // IMPROVED: Return ResponseEntity for better control over HTTP status codes
    public ResponseEntity<Map<String, Object>> login(@RequestBody Map<String, String> credentials) {
        String username = credentials.get("username");
        String password = credentials.get("password");
        
        Map<String, Object> response = new HashMap<>();
        
        // Simple authentication check
        if ("admin".equals(username) && "admin123".equals(password)) {
            // Success: Returns HTTP 200 OK
            response.put("success", true);
            response.put("message", "Login successful");
            response.put("token", "dummy-token-" + System.currentTimeMillis());
            return ResponseEntity.ok(response);
        } else {
            // Failure: Returns HTTP 401 UNAUTHORIZED (Best Practice)
            response.put("success", false);
            response.put("message", "Invalid username or password");
            // Note: We return 401, but the map structure still matches your frontend's expected data keys.
            return new ResponseEntity<>(response, HttpStatus.UNAUTHORIZED); 
        }
    }

    @PostMapping("/logout")
    public Map<String, Object> logout() {
        Map<String, Object> response = new HashMap<>();
        response.put("success", true);
        response.put("message", "Logout successful");
        return response;
    }
}