# 2019-11-12-sqlite Insructions

Let’s convert one (or both?) of today’s CSV exports into a simple database…

Hopefully you’ve already got the non-default exports from earlier, otherwise you might get them from this link.

Tools:

•	you’ll need to brew install sqlite
•	you might also want to brew cask install db-browser-for-sqlite for a neat UI (leave this if it’s taking a long time)

I found csv-to-sqlite to be pretty useful here.

Can you:

1.	Get one of the CSV files loaded into a new Sqlite DB
2.	Query it with SQL, to get out the unique usernames
3.	Create a new CSV of just the records where username is not tn (bonus if you can do “neither tn nor js”