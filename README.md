# GetRide Backend API

## Quick Start

Start all services (API + MySQL):
```bash
docker-compose up --build
```

The API will be available at `http://localhost:3000`

## API Endpoints

### Health Check
- `GET /health` - Check if API is running

### Ride Requests
- `POST /api/ride-requests` - Create ride request (requires auth)
- `GET /api/ride-requests` - Get all ride requests (requires auth)
- `GET /api/ride-requests/:id` - Get ride request by ID (requires auth)
- `PUT /api/ride-requests/:id` - Update ride request (requires auth)
- `DELETE /api/ride-requests/:id` - Delete ride request (requires auth)

## Authentication

For development, use the dummy token in headers:
```
Authorization: Bearer dev-token-12345
```

## Example Request

Create a ride request:
```bash
curl -X POST http://localhost:3000/api/ride-requests \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer dev-token-12345" \
  -d '{
    "fromLocation": "Campus A",
    "toLocation": "Airport",
    "requestedDateTime": "2025-10-05T10:00:00Z",
    "maxPrice": 25.00
  }'
```
