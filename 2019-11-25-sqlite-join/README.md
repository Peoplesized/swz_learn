# SQLite joins and aggretation tutorial

1. To open the command, first go to the terminal and enter `sqlite3`.

2. To open a database enter the following command.

    `.open <db_name>`

3. To get such results from the below table.

    | country  | records_count |
    |----------|---------------|
    | Namibia  | 5             |
    | Botswana | 15            |
    | Zimbabwe | 25            |

    the following command the following query was executed.

    `SELECT countries.country, COUNT(countries.country) "records_count" FROM records INNER JOIN countries ON countries.country = records.country GROUP BY countries.country;`

    - About the query:

        - First select the country field from the countries table.
        - Select the number countries by using the aggration command `COUNT()`
        - Use an INNER JOIN statement to get the records where both tables have the same value on the county field.
        - Use the GROUP BY statement group the records by the `country` record.

4. Other important sqlite commands:

    .schema <table_name>

        shows the table schema.
    
    .mode column

        pretty displays tables and results.

    .tables

        shows all tables in database.

    .header on

        shows column names

