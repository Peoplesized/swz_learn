# Log files tutorial

• Explored how to create temporary directories, which can be  created by running the following command

    `$(mktemp -d)`

• Generated a log file  within the temp directory, using the following command:

    repeat 10 {echo $(date) data: $(od -vAn -N4 -tu4 < /dev/urandom) >> logfile}

• To tail the generated log file, the following comman was ran:

    tail -f logfile

• Grep was used to extract the following ip address `176.31.39.30,` on the apache_logs, the following command was run:

    cat apache_logs | grep 176.31.39.30

    - Noted limitations of grep include:

     - grep has a line length limit of 2048 characters.

     - Larger files greater that 2.4 GB can not be searched.


• lnav `Log file navigator` can be used to manipulate log files

    •lnav can be executed by running 

        lnav <path-to-log-file>

    • filters can be used to filter through a log file, to enter filters, you  have to switch into command mode, which is entered by typing `:`

    • Common filter commands include:

        filter-in <regex> - Only display log lines that match a regex.

        filter-out <regex> - Do not display log lines that match a regex.

        disable-filter <regex> - Disable the given filter.

        enable-filter <regex> - Enable the given filter.

        delete-filter <regex> - Delete the filter.

    • SQL can also be used to query 

    







