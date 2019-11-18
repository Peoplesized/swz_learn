
# 2019-11-15-httpie instructions

1.	Install httpie, docs at https://httpie.org/
2.	Find a list of http status codes, and paste into a file in the repo for today (somewhere you can easily find)
3.	Take a look at http://httpbin.org. Send a request to make it return a 201 HTTP status code.
4.	Send a simple JSON object as a POST request to http://httpbin.org/anything. (Docs are on http://httpbin.org/)
5.	Make a simple JSON file using jq (hint: use the -n flag and just write a basic object). Send this file as JSON to http://httpbin.org/anything - make sure it’s received as JSON, not as text.
6.	httpie is simple, but not the most standard tool. Sometimes, but not always, you can make a simple conversion to the more standard curl tool format: e.g. at curl2httpie.online/. Convert one or two of the requests above to curl format.
7.	Bonus: create a bin at http://requestbin.net/ and send some POST requests for inspection