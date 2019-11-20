No help this time!

Start by copying this zip file into a folder called files in the repo. Then write a bash script (not a one-liner!) that does these steps:

1.	unzip the zip file
2.	for each file, print out the filename next to the number of characters in each file
3.	delete the files you unzipped (i.e. a to e), but leaves the zip file in place

Result should be something like:

a 2
b 3
c 4
d 5
e 6

Bonuses:

1.	write a one-liner that does step 2 above (hint1: removing newlines from your script might work? hint2: check the GNU parallel tool)
2.	write a one-liner that creates the 5 files from scratch.