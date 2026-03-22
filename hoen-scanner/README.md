# Hoen Scanner Microservice

A Java microservice built with the [Dropwizard](https://www.dropwizard.io/) framework as part of the Skyscanner Software Engineering virtual experience task.

## Overview

Skyscanner is incorporating the **Hoen Archipelago** — an up-and-coming tourist destination — into its platform. This microservice manages search results for hotels and rental car services in the area.

When a user searches for a city on the Hoen Archipelago, the Skyscanner backend dispatches an HTTP POST request containing that city to this microservice. The microservice searches through the provided JSON data files for matches and responds with any hotels and rental car services it finds.

## Architecture

The service follows a microservice architecture built on Dropwizard, which bundles together:

- **Jetty** — embedded HTTP server
- **Jersey** — JAX-RS implementation for REST endpoints
- **Jackson** — JSON serialisation/deserialisation

### Key Classes

| Class | Description |
|---|---|
| `HoenScannerApplication` | Main application entry point; loads JSON data and registers resources |
| `HoenScannerConfiguration` | Dropwizard configuration class |
| `Search` | Represents a user's search request (contains `city` field) |
| `SearchResult` | Represents a single search result (contains `city`, `kind`, and `title` fields) |
| `SearchResource` | Dropwizard resource exposing the `POST /search` endpoint |

### Data Files

| File | Description |
|---|---|
| `src/main/resources/hotels.json` | List of hotels in the Hoen Archipelago |
| `src/main/resources/rental_cars.json` | List of rental car services in the Hoen Archipelago |

## Prerequisites

- Java 11 or higher (OpenJDK recommended)
- Apache Maven 3.6+

## Building the Project

```bash
mvn clean package
```

This produces a fat JAR at `target/hoen-scanner-1.0-SNAPSHOT.jar`.

## Running the Service

```bash
java -jar target/hoen-scanner-1.0-SNAPSHOT.jar server
```

The service starts on port **8080** (application) and **8081** (admin).

You should see the following banner in the logs:

```
=================================================
Welcome to Hoen Scanner! Loaded 8 search results.
=================================================
```

## API Usage

### POST /search

Accepts a JSON body with a `city` field and returns all matching hotels and rental cars.

**Request:**

```http
POST http://localhost:8080/search
Content-Type: application/json

{"city": "petalborough"}
```

**Response:**

```json
[
  {
    "city": "petalborough",
    "kind": "car",
    "title": "Compact Car - Petalborough Auto"
  },
  {
    "city": "petalborough",
    "kind": "car",
    "title": "SUV - Petalborough Auto"
  },
  {
    "city": "petalborough",
    "kind": "hotel",
    "title": "The Petalborough Inn"
  },
  {
    "city": "petalborough",
    "kind": "hotel",
    "title": "Petalborough Grand Hotel"
  }
]
```

### Supported Cities

| City | Hotels | Rental Cars |
|---|---|---|
| `petalborough` | 2 | 2 |
| `rustburg` | 1 | 1 |
| `shaleport` | 1 | 1 |

Searching for an unknown city returns an empty array `[]`.

## Testing with curl

```bash
# Search for petalborough
curl -X POST http://localhost:8080/search \
  -H "Content-Type: application/json" \
  -d '{"city": "petalborough"}'

# Search for rustburg
curl -X POST http://localhost:8080/search \
  -H "Content-Type: application/json" \
  -d '{"city": "rustburg"}'

# Search for shaleport
curl -X POST http://localhost:8080/search \
  -H "Content-Type: application/json" \
  -d '{"city": "shaleport"}'
```
