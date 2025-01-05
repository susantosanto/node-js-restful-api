# User API Spec

## Register User API

Endpoint : POST /api/users

Request Body :
```json
{
  "username" : "santo",
  "email" : "santo@gmail.com",
  "password" : "rahasia"
}
```
Response Body Success:
```json
{
  "data" : {
    "username" : "santo"
  }
}
```

Response Body Error :
```json
{
  "errors": "Username already registered"
}
```

## Login User API

Endpoint : POST /api/users/login

Request Body : 
```json
{
  "username" : "santo",
  "password" : "rahasia"
}
```

Response Body Success :
```json
{
  "data" : {
    "token" : "unique-token"
  }
}
```
Response Body Error :
```json
{
  "errors" : "Username or password wrong"
}
```
## Update User API
Endpoint : PATCH /api/users/current

Request Body :
```json
{
  "username" : "susanto", 
  "password" : "new password"
}
```
Response Body Success :
```json
{
  "data" : {
    "id" : 1,
    "username" : "susanto"
  }
}
```

Response Body Error :
```json
{
  "errors" : "Name length max 100"
}
```

## Get User API

Endpoint : GET /api/users/current

Headers :
- Authorization : token

Response Body Success :
```json
{
  "data" : {
    "username" : "susanto"
  }
}
```
Response Body Error :
```json
{
  "errors" : "Unauthorized"
}
```
## Logout User API
Endpoint : DELETE /api/users/current

Headers : 
- Authorization : token

Respons Body Success :
```json
{
  "data" : "Ok"
}
```
Respons Body Error :
```json
{
  "errors" : "Unauthorized"
}
```
