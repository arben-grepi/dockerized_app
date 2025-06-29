# Dockerized Dictionary Application

A containerized web application that serves a Finnish-English dictionary with a microservices architecture. Demonstrates practical experience with Docker containerization, microservices communication, and full-stack web development.

## Technologies Used

### Backend

- **Node.js 16** with Express.js REST API
- **CORS** middleware for cross-origin requests
- **File System** module for data persistence

### Frontend

- **Nginx** web server with reverse proxy
- **HTML5** with vanilla JavaScript
- **Fetch API** for asynchronous HTTP requests

### DevOps

- **Docker** for containerization
- **Docker Compose** for multi-container orchestration
- **Docker Hub** for image registry

## Key Features

- **REST API**: `GET /api` endpoint serving Finnish-English dictionary data
- **Microservices**: Separate containers for frontend and backend
- **Reverse Proxy**: Nginx routes API requests to backend service
- **Service Discovery**: Automatic backend discovery via Docker Compose networking

## Quick Start

```bash
# Clone and run
git clone https://github.com/arben-grepi/dockerized_app.git
cd dockerized_app
docker-compose up -d

# Access application
# Frontend: http://localhost:8080
# Backend API: http://localhost:5000/api
```

## Architecture

```
Frontend (Nginx) ←→ Backend (Node.js)
     Port 8080         Port 5000
```

## Technical Highlights

- **Microservices Architecture**: Independent frontend and backend containers
- **Container Optimization**: Alpine Linux base images
- **Production Ready**: Environment variables and proper port mapping
- **CI/CD Ready**: Docker Hub integration for deployments
- **Scalable Design**: Services can be scaled independently

## Skills Demonstrated

- Docker containerization and multi-container applications
- Microservices communication and service discovery
- REST API development with Express.js
- Web server configuration with Nginx
- Container orchestration with Docker Compose
- Image registry management with Docker Hub
