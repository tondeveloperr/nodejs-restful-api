# User API Spec

## Register User API

Endpoint : POST /api/users

Request Body :

```json
{
  "username": "kartono",
  "password": "rahasia123",
  "name": "kartono saleh"
}
```

Response Body Success :

```json
{
  "data": {
    "username": "kartono",
    "name": "kartono saleh"
  }
}
```

Response Body Error :

```json
{
  "errors" : "Username already registered"
}
```


## Login User API

Endpoint : POST /api/users/login

Request Body :

```json
{
  "username": "kartono",
  "password": "rahasia123"
}
```

Response Body Success :

```json
{
  "data": {
    "token": "unique-token"
  }
}
```

Response Body Error :

```json
{
  "errors" : "username or password is wrong"
}
```


## Update User API

Endpoint : PATCH /api/users/current

Header :
- Authorization : token

Request Body :

```json
{
    "name" : "Kartono Edit", //optional
    "password" : "new password" //optional
}
```

Response Body Success :

```json
{
  "data": {
    "username": "kartono",
    "name": "kartono Edit"
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

Header :
- Authorization : token

Response Body Success :

```json
{
  "data": {
    "username": "kartono",
    "name": "kartono saleh"
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

Endpoint : DELETE /api/users/logout

Header :
- Authorization : token

Response Body Success :

```json
{
  "data": "Ok"
}
```

Response Body Error :

```json
{
  "errors" : "Unauthorized"
}
```
