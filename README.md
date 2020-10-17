# book-grpc-mongo-js

## HOW TO
```
docker-compose up --build -d
```



## PROTO
### Index
>Request:
```json
{}
````
>Response:
```json
{
    'message': 'String',
    'books': [
        {
            'id': 'String',
            'title': 'String',
            'author': {
                'name': 'String',
                'phone': 'String',
                'address': 'String'
            }
        }
    ]
}
```

### Get
>Request:
```json
{
    'id': 'String'
}
````
>Response:
```json
{
    'message': 'String',
    'book': {
        'id': 'String',
        'title': 'String',
        'author': {
            'name': 'String',
            'phone': 'String',
            'address': 'String'
        }
    }
}
```

### Insert
>Request:
```json
{
    'title': 'String',
    'name': 'String',
    'phone': 'String',
    'address': 'String'
}
````
>Response:
```json
{
    'message': 'String',
    'book': {
        'id': 'String',
        'title': 'String',
        'author': {
            'name': 'String',
            'phone': 'String',
            'address': 'String'
        }
    }
}
```

### Update
>Request:
```json
{
    'id': 'String',
    'title': 'String',
    'name': 'String',
    'phone': 'String',
    'address': 'String'
}
````
>Response:
```json
{
    'message': 'String',
    'book': {
        'id': 'String',
        'title': 'String',
        'author': {
            'name': 'String',
            'phone': 'String',
            'address': 'String'
        }
    }
}
```

### Delete
>Request:
```json
{
    'id': 'String'
}
````
>Response:
```json
{
    'message': 'String',
}
```

