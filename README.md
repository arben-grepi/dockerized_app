# Dockerized App Practice

This app is for practicing Docker skills. Follow the steps below to set up and manage your containers.

---

# Prerequisites

To set up and run this Dockerized app, ensure the following prerequisites are met:

1. **Docker**

   - Install Docker on your machine if it's not already installed. You can download it from [Docker’s official website](https://www.docker.com/products/docker-desktop) and follow the installation instructions for your operating system (Windows, macOS, or Linux).
   - Verify that Docker is installed and running by executing `docker --version` in your terminal.

2. **Docker Compose**

   - Docker Compose is typically included with Docker Desktop for Windows and macOS. If you’re using Linux, you may need to install it separately. Check by running `docker-compose --version` in your terminal.

3. **Git**

   - Ensure Git is installed to clone the repository. You can install Git from [Git’s official website](https://git-scm.com/), and check the installation with `git --version` in the terminal.

4. **Node.js and npm (Optional)**
   - If you want to make modifications to the backend or frontend code and build new images, you’ll need Node.js and npm to install dependencies and run the application locally before containerizing. Download them from [Node.js official website](https://nodejs.org/).

---

# Cloning the Project Repository

1. Use the `git clone` command to pull the repository:
   ```
   git clone https://github.com/arben-grepi/dockerized_app.git &&
   cd dockerized_app
   ```

---

# Remove existing tags for practising pushing docker images to the dockerhub

**Note that, this is not mandatory, do this if you want to practise pushing to dockerhub**

1. **Access the DockerHub Repository**  
   Go to DockerHub repository:
   `https://hub.docker.com/repository/docker/arbengrepi/julkinen/general`
   to manage your repository tags.
2. **Remove Old Tags**  
   Remove **MockBackend** and **MockFrontend** Tags.

   **After removing old tags, you can push the latest versions of the backend and frontend source code to DockerHub.**

3. **Build the images and push them to the dockerhub**

   **Build both backend and frontend images**

   ```
   docker build -t arbengrepi/julkinen:MockBackend SourceCode/backend && docker build -t arbengrepi/julkinen:MockFrontend SourceCode/frontend

   ```

   **Push both images to dockerhub**

   ```
   docker push arbengrepi/julkinen:MockBackend && docker push arbengrepi/julkinen:MockFrontend

   ```

---

# Pulling the Containers from DockerHub and Running Them

Once you are in the `dockerized_app` directory, pull the latest backend and frontend images to your local machine.

**If you havent pushed them there previously, check that MockBackend and MockFrontend Tags are still there. If they are not, you need to look up the instructions above on how to push them there**
`https://hub.docker.com/repository/docker/arbengrepi/julkinen/general`

**Pull the images**:  
 `docker pull arbengrepi/julkinen:MockBackend && docker pull arbengrepi/julkinen:MockFrontend`

4. **Start the Services**  
   Run the services defined in the `docker-compose.yml` file in detached mode:  
   `docker-compose up -d`

   - The backend service is now accessible on `http://localhost:5000/api`, with port `5000` on the host mapped to port `3000` in the container.
   - The frontend service is now accessible on `http://localhost:8080`, with port `8080` on the host mapped to port `80` in the container.

---

## Stopping and Removing Containers

When you are done, stop and remove the containers with these commands:

1. **Stop ALL running containers**:
   NOTE THAT THIS STOPS ALL CONTAINERS, NOT JUST THE ONES WE RAN IN THIS SESSION
   `docker stop $(docker ps -q)`

2. **Remove ALL containers**:
   NOTE THAT THIS REMOVES ALL CONTAINERS, NOT JUST THE ONES WE RAN IN THIS SESSION
   `docker rm $(docker ps -aq)`
