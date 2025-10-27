package com.pharmatrack.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        // Since your frontend is running on http://localhost:5173 (confirmed by the image), 
        // we explicitly allow requests from that origin.
        String frontendOrigin = "http://localhost:5173"; 
        
        registry.addMapping("/**") // Apply CORS configuration to all endpoints in the application
                .allowedOrigins(frontendOrigin) // Allow requests ONLY from your frontend URL
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS") // Allow standard CRUD methods
                .allowedHeaders("*") // Allow all headers
                .allowCredentials(true); // Allow sending cookies/auth headers
    }
}
