# 2019-12-03-docker-registry

Simple instructions today! Configure a local Docker registry.

1.	Try this to start: [Registry as a pull through cache](https://docs.docker.com/registry/recipes/mirror/)
2.	Can you pull a small container (e.g. Alpine), then delete from the client machine (not the registry server), and pull again but faster? How can you benchmark or demonstrate this?
3.	Ideally we would  also push built containers - do the instructions above work for that too? Might need instructions like this instead or as well as the earlier ones.
4.	Can you think of an automated test script that could run step 2 multiple times (with multiple images?) and log out the results in a neat way. (hints: repeat might help if you install it, time, etc.)

For this morning, just use one of your machines. If it works, we can think about setting it up in the office.