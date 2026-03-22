package com.hoen;

import io.dropwizard.Application;
import io.dropwizard.setup.Bootstrap;
import io.dropwizard.setup.Environment;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.core.type.TypeReference;

import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;

public class HoenScannerApplication extends Application<HoenScannerConfiguration> {

    private final List<SearchResult> searchResults = new ArrayList<>();

    public static void main(final String[] args) throws Exception {
        new HoenScannerApplication().run(args);
    }

    @Override
    public String getName() {
        return "hoen-scanner";
    }

    @Override
    public void initialize(final Bootstrap<HoenScannerConfiguration> bootstrap) {
        // Initialization logic if needed
    }

    @Override
    public void run(final HoenScannerConfiguration configuration, final Environment environment) {
        ObjectMapper objectMapper = new ObjectMapper();
        try {
            // Load rental car data
            InputStream rentalCarsStream = getClass().getClassLoader().getResourceAsStream("rental_cars.json");
            if (rentalCarsStream != null) {
                List<SearchResult> rentalCars = objectMapper.readValue(
                        rentalCarsStream,
                        new TypeReference<List<SearchResult>>() {}
                );
                searchResults.addAll(rentalCars);
            } else {
                System.err.println("Warning: rental_cars.json not found in resources");
            }

            // Load hotel data
            InputStream hotelsStream = getClass().getClassLoader().getResourceAsStream("hotels.json");
            if (hotelsStream != null) {
                List<SearchResult> hotels = objectMapper.readValue(
                        hotelsStream,
                        new TypeReference<List<SearchResult>>() {}
                );
                searchResults.addAll(hotels);
            } else {
                System.err.println("Warning: hotels.json not found in resources");
            }
            
        } catch (IOException e) {
            e.printStackTrace();
            throw new RuntimeException("Failed to load JSON files", e);
        }

        System.out.println("=================================================");
        System.out.println("Welcome to Hoen Scanner! Loaded " + searchResults.size() + " search results.");
        System.out.println("=================================================");

        // Register the search resource endpoint
        environment.jersey().register(new SearchResource(searchResults));
    }
}
