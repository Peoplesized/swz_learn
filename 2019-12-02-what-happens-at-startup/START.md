## 2019-12-02-what-happens-at-startup Instructions

We’re going to try to trace what happens to a machine when you start it up. No the lowest level of kernel and so on, and also not the GUI and the user apps, more the services in the middle: logging, databases, servers, etc.

Steps

1.	Make a table of the different ways you come across to manage services, add a few columns describing what systems they run on, whether they are current/obsolete, and the main commands. Here are some to start:

•	launchd (mac OS)
•	systemd (current on Debian/Ubuntu?)
•	upstart (retired?)
•	brew services - no idea what this relies on underneath

2.	For the most common options above, figure the basics of listing the running services, stopping and starting services, logging, adding and removing from the startup list.
3.	To check that you’ve got this stuff clear, install the mosh server on our remote machine, and find out how the service gets started at boot. Run sudo reboot on that machine to restart the machine and either a) lock yourselves out, or b) have got mosh working!!We’re going to try to trace what happens to a machine when you start it up. No the lowest level of kernel and so on, and also not the GUI and the user apps, more the services in the middle: logging, databases, servers, etc.

Steps

1.	Make a table of the different ways you come across to manage services, add a few columns describing what systems they run on, whether they are current/obsolete, and the main commands. Here are some to start:

•	launchd (mac OS)
•	systemd (current on Debian/Ubuntu?)
•	upstart (retired?)
•	brew services - no idea what this relies on underneath

2.	For the most common options above, figure the basics of listing the running services, stopping and starting services, logging, adding and removing from the startup list.
3.	To check that you’ve got this stuff clear, install the mosh server on our remote machine, and find out how the service gets started at boot. Run sudo reboot on that machine to restart the machine and either a) lock yourselves out, or b) have got mosh working!!