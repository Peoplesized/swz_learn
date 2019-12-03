if [[ "$(docker images -q $1  2> /dev/null)" == "" ]]; then
docker image remove $1
fi
time_1=$(time docker pull $1)
docker tag $1  localhost:5000/$1
docker push localhost:5000/$1
docker image remove $1
docker image remove $1
time docker pull localhosti:5000/$1
