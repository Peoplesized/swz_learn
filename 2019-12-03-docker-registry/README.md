# Docker registry tutorial

1. First following the instrcutions on [Deploy a registry server](https://docs.docker.com/registry/deploying/) we set the docker registry, the following command was executed

    ```
        docker run -d -p 5000:5000 --restart=always --name registry registry:2
    ```

   - This command sets up a registry of the name `registry`

2. To access an image to the local registry, you first have to tag and and push it the local registry, that can be achieved by running the following commands:

    taging 
    ```
        docker push <hosy_name>:<port_number>/<image_name>
    ```

    pushing
    ```
        docker push localhost:5000/my-ubuntu
    ```

3. To test the effectiveness of the registry the following commands were ran 

    pull alpine image:
    ```
        time docker pull alpine:3.9.4
    ```

    tag image:
    ```
        docker tag alpine:3.9.4 localhost:5000/alpine:3.9.4
    ```

    push to local registry:
    ```
        docker push localhost:5000/alpine:3.9.4
    ```

    remove from local-cache 
    ```
        docker image remove alpine:3.9.4
        docker image remove localhost:5000/alpine:3.9.4
    ```

    pull from local registry:
    ```
        time docker pull localhost:5000/alpine:3.9.4
    ```

    The following results were found from obtained from the  above steps
    
| image  | Pull from public registry(time take)  | Pull from private registry (time take) |
|--------|----------------------------------------|----------------------------------------|
| alpine | 28.478s                                | 0.351s                                 |


4. Script written to automate the above steps


    ```
        if [[ "$(docker images -q $1  2> /dev/null)" == "" ]]; then
        docker image remove $1
        fi
        time_1=$(time docker pull $1)
        docker tag $1  localhost:5000/$1
        docker push localhost:5000/$1
        docker image remove $1
        docker image remove $1
        time docker pull localhost:5000/$1
    ```

    





