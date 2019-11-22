# CSV-TO-SQLITE tutorial


•Dived into using a tool named csv-to-sqlite to export a csv file into a  sqlite .db file.

• To do so, execute the command
    
    csv-to-sqlite -f  `<csv-filename> -o <db-filename>`. 

• in our case we executed 

    `csv-to-sqlite -f bwa.non-default.records.csv -o bwa.non-default.records.db` 

•  csv-to-sqlite creates tables named after the filename by default. 

• SQLite must be installed in the working environment inorder to execute quiries in the generate sqlite database.

• To open sqlite from the cmd you type `sqlite`.

• To open sqlite database files we simply type `.open <db-filename>`. 

• In our case we executed 

    `.open bwa.non-default.records.db`

• SQL querries can now be executed.

• In our case we wanted the list of all unique usernames so we executed

    `select DISTINCT username from `bwa.non-default.records``

•	To print the results of a query to a csv file, we type the following commands in succession. 

    • `.mode csv` 
    • `.output <output-filename>` 
    •  `<sql_query>`
    • `.quit` 

• In our case we executed 

    `.mode csv` 
    `.output bwa.non-default-non-tn-js.records.db` 
    `SELECT * from `bwa.non-default.records` WHERE username NOT IN ('tn', 'js')`
    `.quit`   
• More information on sqlite can be found on https://sqlite.org/cli.html

