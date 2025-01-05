# Contact API Spec

## Create Contact API

Endpoint : POST /api/contacts

Headers :
- Authorization : token

Request Body :

```json
{
  "first_name" : "santo",
  "last_name" : "susanto",
  "email" : "santo@gmail.com",
  "phone" : "32423423434"
}
```

Response Body Success :

```json
{
  "data" : {
    "id" : 1,
    "first_name" : "santo",
    "last_name" : "susanto",
    "email" : "santo@gmail.com",
    "phone" : "32423423434"
  }
}
```

Response Body Error :

```json
{
  "errors" : "Email is not valid format"
}
```

## Update Contact API

Endpoint : PUT /api/contacts/:id

Headers :
- Authorization : token

Request Body :

```json
{
  "first_name" : "santo",
  "last_name" : "susanto",
  "email" : "santo@gmail.com",
  "phone" : "32423423434"
}
```

Response Body Success :

```json
{
  "data" : {
    "id" : 1,
    "first_name" : "santo",
    "last_name" : "susanto",
    "email" : "santo@gmail.com",
    "phone" : "32423423434"
  }
}
```

Response Body Error :

```json
{
  "errors" : "Email is not valid format"
}
```

## Get Contact API

Endpoint : GET /api/contacts/:id

Headers :
- Authorization : token

Response Body Success :

```json
{
  "data" : {
    "id" : 1,
    "first_name" : "santo",
    "last_name" : "susanto",
    "email" : "santo@gmail.com",
    "phone" : "32423423434"
  }
}
```

Response Body Error :

```json
{
  "errors" : "Contact is not found"
}
```

## Remove Contact API

Endpoint : DELETE /api/contacts/:id

Headers :
- Authorization : token

Response Body Success :

```json
{
  "data" : "OK"
}
```

Response Body Error :

```json
{
  "errors" : "Contact is not found"
}
```