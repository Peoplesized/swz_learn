# DOCKER ALPINE tutorial


• Explored how to setup docker containers using Dockerfile

• Explored how to start and stop docker containers

• Docker containers can be built by using the following command
    
    docker build -t `<docker-image-name>` .
 
 In our case we executed `docker build -t docker_alpine:1.0 .`
• Docker containers can be started by using the following command
    
    docker run -p `host-port`:`container-port` --name `container name` docker_alpine:1.0 .
 
 In our case we executed `docker run -p 8080:8080 --name docker_alpine  docker_alpine:1.0`

•  Docker containers can be stopped by using the following command
    
    docker rm  `<docker-image-name>`

•  To show docker stats, run the following command
    
    docker stats 

• To run  a docker container with a mounted volume for persistence run the following command 
        
    docker run -d 
    --name `<docker-image-name>`
    --mount source=`<volume-name>`,target=/app
    docker_alpine:1.0 

    


