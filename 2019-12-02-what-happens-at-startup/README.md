## 2019-12-02-what-happens-at-startup Tutorial

| Operating System | Way          | Status   | Listing services                                    | Start service                              | Stop service                       | Adding/Removing from startup list                                                                                              |
|------------------|--------------|----------|-----------------------------------------------------|--------------------------------------------|------------------------------------|--------------------------------------------------------------------------------------------------------------------------------|
| Windows          | net command  | current  | net start                                           | net start “name of service”                | net stop “name of service”         |                                                                                                                                |
|                  | sc command   | current  |                                                     | sc config “name of service” start=disabled | sc stop “name of service”          | sc config “name of service” start=demand sc config “name of service” start=auto sc config “name of service” start=delayed-auto |
| Linux            | systemctl    | current  | sudo systemctl list-unit-files --type service --all | sudo systemctl start [service_name]        | sudo systemctl stop [service_name] | sudo systemctl enable [service_name]                                                                                           |
|                  | service      | obsolute | service --status-all                                | service [service_name] stop                | service [service_name] start       |                                                                                                                                |
|                  | init script  | obsolute |                                                     | /etc/init.d/[service_name] start           | /etc/init.d/[service_name] stop    |                                                                                                                                |
| Mac OS           | launchctl    | current  | launchctl list                                      | launchctl start [service_name]             | launchctl stop [service_name]      | launchctl unload [service_name]                                                                                                |
|                  | brew service |          | brew service list                                   | brew service start [service_name]          | brew service stop [service_name]   |                                                                                                                                |
# Windows

For windows, services have an attributr `Startup Type` which governs how the service is started. It can hold any of the following values:
    
    - Automatic - service will start at boot time. Some services, when no longer required, will also automatically stop when not needed.

    - Automatic (Delayed Start) - service will start just after boot time. Some services, when no longer required, will also automatically stop when not needed.

    - Automatic (Delayed Start, Trigger Start) - With a service in this state, it will start just after boot when specifically called.

    - Manual (Trigger Start) - This is a version of Manual mode that allows Windows to start a service when specifically called and Microsoft’s answer to “too many services running all the time”.

    - Manual - Manual mode allows Windows to start a service when needed. However, very few services will start up when required in Manual mode. If you find you need a service, place it into Automatic.

    - Disabled - This setting will stop a service from starting, even if needed. Errors in the Event Viewer will show up complaining of that fact. Some services, while Disabled, will constantly complain. However, this situation is taken care of if placed in Manual. The service descriptions identifies those that should be in Manual vice Disabled.

# Linux

For linux, services have an attribute `service` which governs how the service is started. It can hold any of the following values:

    - Enabled services are currently running. They usually have no problems.

    - Disabled services are not active but can be activated at any time without a problem.

    - Masked services won’t run unless we take that property away from them.

    - Static services will only be used in case another service or unit needs it.

    - Finally, there are services generated through a SysV or LSB initscript with systemd generator.

# Testing skills on the serve

- Tried to follow the isntructions [How To Install and Use Mosh on a VPS | DigitalOcean](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-mosh-on-a-vps)

# References 
 - [Manage services in windows 10](https://www.howto-connect.com/manage-services-in-windows-10/)
 - [Manage and list services in linux](https://www.hostinger.com/tutorials/manage-and-list-services-in-linux/)
  - [How to start stop or restart services in ubuntu](https://vitux.com/how-to-start-stop-or-restart-services-in-ubuntu/)
  - [Managing linux daemons init scripts](https://www.linux.com/tutorials/managing-linux-daemons-init-scripts/)
  - [Managing linux daemons init scripts](https://www.linux.com/tutorials/managing-linux-daemons-init-scripts/)