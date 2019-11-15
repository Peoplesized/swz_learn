# HTTP and httpie tutorial

## HTTP 

### http status codes can grouped as follows

**CATEGORY**|**DESCRIPTION**
:-----:|:-----:
1xx: Informational|Communicates transfer protocol-level information.
2xx: Success|Indicates that the client’s request was accepted successfully.
3xx: Redirection|Indicates that the client must take some additional action in order to complete their request.
4xx: Client Error|This category of error status codes points the finger at clients.
5xx: Server Error|The server takes responsibility for these error status codes.
 


## HTTPie

*  Httpie is a http client command line interface that enables one to execute http requests on the command line.

* Httpie commmands are structured as follows 

    `http [flags] [METHOD] URL [ITEM [ITEM]]`
* Request data fields can be serialized as a JSON object using the syntax

     - `field=@file.txt` (serializes the contents of file.txt to a JSON object and assigns the result to field)


* A request can be sent with HTTP Headers as follows  Name:Value e.g 	
  - `http POST  api_key: abcd http://httbin.org/anything -d @basic.json`
  - Its worth noting that the header will be returned as Api-Key: "abcd"

* A json file can be assigned to a variable as follows
    - `http POST  http://httpbin.org/anything api_key:abcd value:=@basic.json`
    
- More info about httpie can be found on  [HTTPie – command line HTTP client](https://httpie.org/)


## HTTP BIN

* Httpbin is a simple HTTP Request & Response Service.

* Command to return 201 status code from httbin

    http POST https://httbin.org/status/201

* Command to produce simple json file using jq 

    - `jq  '{"name": "gift", id: 1234}'  > basic.json`

* Request sent to httpbin with the above file 

   - ` http POST https://httbin.org/anything < basic.json `

* An equivalent cURL request for the above httpie request

  - `curl -X POST  http://httbin.org/anything -d @basic.json`



  


