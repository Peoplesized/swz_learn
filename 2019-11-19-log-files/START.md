# 2019-11-19-log-files Instructions

Part 1: tailing a log

1.	Open a temporary folder and run repeat 10 {echo $(date) data: $(od -vAn -N4 -tu4 < /dev/urandom) >> logfile}
2.	cat logfile to see the contents
3.	Open another terminal (tmux?!) in the same folder, and run tail -f logfile
4.	Run the first command again to add more lines to the logfile - the terminal running tail should fill up

Part 2: finding useful stuff

1.	Download and unzip the sample log file
2.	Use grep to find lines that e.g. come from IP 176.31.39.30, or entries that are on 20th May 2015
3.	See any limitations with using this approach?
4.	Take a look at the ‘Log File Navigator’ https://lnav.org
5.	Read the docs to find out how you add filters

Bonus: Take a look at the Console app in macOS, see if you can find the source log files that it collates



