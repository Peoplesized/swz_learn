# 2019-11-28-remote servers tutorial

## How to Login to a remote server

1. To Login to a remote server you need the remote server's ip address or host name and the username.

2. Once you have this you can login to the remote using the ssh command i.e

    `ssh <username>@<hostname/ip_address>`

## How to create a new user in a remote server running on linux

1. You can add a new user on an  by typing the command

    `useradd <newusername>`

2. To add administrator priviledges to the new user, you need to add the user to the sudo group by typing the command

    `usermod -aG sudo <newusername`

## Aditional things learned

1. To list all users in a linux system type the command

    `awk -F':' '{ print $1}' /etc/passwd`

2. To list groups on a linux system type 

    `groups`

3. To copy ssh keys to a remote server use the command

    `ssh-copy-id <username>@<hostname/ip_address>`

## How to fix Permission denied(public key) error
For future, the fix is: (pls copy into your docs for today!)

1.	Login as root to the platform console (if possible) - this is not SSH, but is e.g. via the web console for the platform
2.	Delete any users added with deluser --remove-home newuser.

To debug I used ssh -vvv root@ravelohu-780.ppls.io, which gives a very verbose output for SSH. On the server (via the root console login described above), I also did tail -f /var/log/auth.log, which pointed me to the permissions issue. (Helped by this and this).

The problem looks to have been some permissions for the home folder for the new user(s) were causing SSH to have a problem authenticating - maybe the folders were not sufficiently locked-down, and something in the SSH config on the server says “if everything is not locked down, no-one is getting in”. Makes it secure, I guess.

Btw, I didn’t see a home folder for a gift user, only a manqoba user. But deleting both users anyway worked.