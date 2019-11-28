## Instructions
This is as much about understanding, recording and remembering what you’ve done, as it about achieving anything specific.

Background:

•	You have a brand new server at 157.245.170.71.
•	There’s a DNS record pointing ravelohu-780.ppls.io to it.
•	It’s running Ubuntu 19.10. It has 1 CPU and 2GB RAM, so is small but should be able to run most things you can try.
•	You both have root access to it. It’s got your SSH keys uploaded, so there’s no password.

Steps:

1.	Figure out how to connect to it with ssh. (Definitely shout if you get stuck here after 10 mins or so!). Can you both connect at the same time?
2.	Do some basics:

•	figure out how to add a new user (adduser or useradd or something else?). Can you login as that user?
•	install tmux (default keybinding is CTRL+B)

3.	Try out neat stuff:

•	install Docker?
•	install mosh server (and client on your machine)
•	install faas-cli, then clone and build our fn-covariate-extractor function (if you signup for a Docker Hub account, do docket login, and prefix the image in stack.yml with your Docker Hub username, you should also be to faas push and see it appear in your Docker Hub account). Don’t try to deploy to our OpenFaas servers just yet.

You can basically do what you want with it this morning, add any software, etc. But remember that a remote server like this might not be around for long. We might want to rebuild it, etc. At the end of today’s session, we can wipe it out, or keep it if you’ve got something useful running it.