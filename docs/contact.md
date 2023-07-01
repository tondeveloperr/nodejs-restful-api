# Contact API Spec

## Create Contact API

Endpoint : POST /api/contacts

Headers :

- Authorization : token

Request Body :

```json
{
  "first_name": "Kartono",
  "last_name": "saleh",
  "email": "kartono@gmail.com",
  "phone": "08132222222"
}
```

Response Body Success :

```json
{
  "data": {
    "id": 1,
    "first_name": "Kartono",
    "last_name": "saleh",
    "email": "kartono@gmail.com",
    "phone": "08132222222"
  }
}
```

Response Body Error :

```json
{
  "errors": "Email is not valid format"
}
```

## Update Contact API

Endpoint : PUT /api/contacts/:id

Headers :

- Authorization : token

Request Body :

```json
{
  "first_name": "Kartono",
  "last_name": "saleh",
  "email": "kartono@gmail.com",
  "phone": "08132222222"
}
```

Response Body Success :

```json
{
  "data": {
    "id": 1,
    "first_name": "Kartono",
    "last_name": "saleh",
    "email": "kartono@gmail.com",
    "phone": "08132222222"
  }
}
```

Response Body Error :

```json
{
  "errors": "Email is not valid format"
}
```

## Get Contact API

Endpoint : GET /api/contacts/:id

Headers :

- Authorization : token

Response Body Success :

```json
{
  "data": {
    "id": 1,
    "first_name": "Kartono",
    "last_name": "saleh",
    "email": "kartono@gmail.com",
    "phone": "08132222222"
  }
}
```

Response Body Error :

```json
{
  "errors": "Contact is not found"
}
```

## Search Contact API

Endpoint : POST /api/contacts

Headers :

- Authorization : token

Query params :

- name : Search by first_name or last_name using like, (optional)
- email : Search by email using like, (optional)
- phone : Search by phone using like, (optional)
- page : number of page, default 1
- size : size per page, default 10

Response Body Success :

```json
{
  "data": [
    {
      "id": 1,
      "first_name": "Kartono",
      "last_name": "saleh",
      "email": "kartono@gmail.com",
      "phone": "08132222222"
    },
    {
      "id": 2,
      "first_name": "samsul",
      "last_name": "bahri",
      "email": "samsul@gmail.com",
      "phone": "08111111111"
    }
  ],
  "paging": {
    "page": 1,
    "total_page": 3,
    "total_item": 30
  }
}
```

Response Body Error :

```json
{
  "errors": "Contact is not found"
}
```

## Remove Contact API

Endpoint : DELETE /api/contacts/:id

Headers :

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
  "errors": "Contact is not found"
}
```
