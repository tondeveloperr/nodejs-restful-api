# Address API Spec

## Create Address API

Endpoint : POST /api/contacts/:contactId/addresses

Header :

- Authorization : token

Request Body :

```json
{
  "street": "Thamrin",
  "city": "Bekasi",
  "province": "Jawa Barat",
  "country": "Indonesia",
  "postal_code": "kode pos"
}
```

Response Body Success :

```json
{
  "data": {
    "id": 1,
    "street": "Thamrin",
    "city": "Bekasi",
    "province": "Jawa Barat",
    "country": "Indonesia",
    "postal_code": "kode pos"
  }
}
```

Response Body Error :

```json
{
  "errors": "Country is required"
}
```

## Update Address API

Endpoint : PUT /api/contacts/:contactId/addresses/:addressId

Header :

- Authorization : token

Request Body :

```json
{
  "street": "Thamrin Edit",
  "city": "Bekasi",
  "province": "Jawa Barat",
  "country": "Indonesia",
  "postal_code": "kode pos"
}
```

Response Body Success :

```json
{
  "data": {
    "id": 1,
    "street": "Thamrin Edit",
    "city": "Bekasi",
    "province": "Jawa Barat",
    "country": "Indonesia",
    "postal_code": "kode pos"
  }
}
```

Response Body Error :

```json
{
  "errors": "Country is required"
}
```

## Get Address API

Endpoint : GET /api/contacts/:contactId/addresses/:addressId

Header :

- Authorization : token

Response Body Success :

```json
{
  "data": {
    "id": 1,
    "street": "Thamrin Edit",
    "city": "Bekasi",
    "province": "Jawa Barat",
    "country": "Indonesia",
    "postal_code": "kode pos"
  }
}
```

Response Body Error :

```json
{
  "errors": "Countact is not found"
}
```

## List Address API

Endpoint : GET /api/contacts/:contactId/addresses

Header :

- Authorization : token

Response Body Success :

```json
{
  "data": [
    {
      "id": 1,
      "street": "Thamrin Edit",
      "city": "Bekasi",
      "province": "Jawa Barat",
      "country": "Indonesia",
      "postal_code": "kode pos"
    },
    {
      "id": 2,
      "street": "Cibarusah",
      "city": "Bekasi",
      "province": "Jawa Barat",
      "country": "Indonesia",
      "postal_code": "kode pos"
    }
  ]
}
```

Response Body Error :

```json
{
  "errors": "Countact is not found"
}
```

## Remove Address API

Endpoint : POST /api/contacts/:contactId/addresses/:addressId

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
  "errors": "Address is not found"
}
```
