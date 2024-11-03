Use the `git clone` command to pull the repository:

```
git clone https://github.com/arben-grepi/dockerized_app.git &&
cd dockerized_app

```

**Now you are in the dockerized_app directory and can start pulling the containers from Dockerhub\***

Pulls the latest version of the backend image from Docker Hub to your local machine.
`docker pull arbengrepi/julkinen:backend`

Pulls the latest version of the frontend image from Docker Hub to your local machine.
`docker pull arbengrepi/julkinen:frontend`

Starts the services defined in the docker-compose.yml file in detached mode, allowing the terminal to be used for other commands while the containers run in the background.
`docker-compose up -d`

**When you are done**
Stop the containers first before removing them. Here’s how to do it:

1. Stop **all** running containers:

   `docker stop $(docker ps -q)`

2. Then, remove **all** containers:

   `docker rm $(docker ps -aq)`

If you want to force remove the running containers without stopping them first, you can use the -f (force) flag:

`docker rm -f $(docker ps -aq)`
