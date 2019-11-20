#!/bin/zsh
# My first script

unzip -qq abcde.zip  -d files/;

cd  files/

for file in *
do
   a=$(cat $file | wc -c)
   echo "$file $a"
done
cd ..
rm -rf files/
