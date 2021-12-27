# Sayna-TestBack-NodeJS

## Description

A NodeJS API that manages a user Authentication. 

## HOST
https://polar-meadow-89641.herokuapp.com

## Installation

```bash
$ npm install
```

## Running the app

```bash
$ npm start

```

## All Endpoints

### The root [GET] [/]

+ Response 200 (rendering a documentation html page)

### Register [POST] [/register]

+ Request (application/json)

    ```json
        {
            "firstname": "Test",
            "lastname": "test",
            "email": "mytest@mail.com",
            "password": "mypass",
            "sexe": "F",
            "role": "ADMIN",
            "dateNaissance": "2021-11-12"
        }
    ```

+ Response 200 (application/json)

    + Body

    ```json
        {
            "error": false,
            "message": "L'utilisateur a bien été créé avec succès",
            "user": {
                "firstname": "Test",
                "lastname": "test",
                "email": "mytest@mail.com",
                "sexe": "F",
                "role": "ADMIN",
                "dateNaissance": "2021-11-12T00:00:00.000Z",
                "createdAt": "2021-12-26T16:52:01.480Z",
                "updatedAt": "2021-12-26T16:52:01.480Z"
            }
        }
     ```

### Login [POST] [/login]

+ Request (application/json)

    ```json
        {
            "email": "mytest@mail.com",
            "password": "12345678"
        }
    ```

+ Response 200 (application/json)

    + Body

    ```json
        {
            "error": false,
            "message": "L'utilisateur a été authentifié avec succès",
            "user": {
                "firstname": "Te",
                "lastname": "test",
                "email": "mytest@mail.com",
                "sexe": "F",
                "dateNaissance": "2021-11-12T00:00:00.000Z",
                "createdAt": "2021-12-26T12:27:28.429Z",
                "updatedAt": "2021-12-26T12:27:28.429Z"
            },
            "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MWM4NWZiMDkyY2VlOWMyMDA5MTFiYjgiLCJpYXQiOjE2NDA1MzQ5NjAsImV4cCI6MTY0MDUzODU2MH0.kMY2cHI0k6kORf6u88i3rP0fDGZDMgAV7BgvjLeF5sk",
            "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MWM4NWZiMDkyY2VlOWMyMDA5MTFiYjgiLCJpYXQiOjE2NDA1MzQ5NjAsImV4cCI6MTY0MTEzOTc2MH0.mmB_uZ8TYS8A4mEvJzcAqd72I_5ax5P_vbv_o03SuBg"
        }
   ```

### Update user [PUT] [/user] [Need Authorization in header]

+ Request (application/json)
    
    Don't forget to add Authorization in your header.
    
    Only four field can be updated : firstname, lastname, dateNaissance, sexe.
    Just write your change, you can forget others. Like in the next request, only "firstname" and "sexe" will be updated.

    ```json
        {
            "firstname": "Jane",
            "sexe": "F"
        }
    ```    

+ Response 200 (application/json)

    + Body

    ```json
        {
            "error": false,
            "message": "Vos données ont été mises à jour"
        }
    ```

### Add bank card [PUT] [/user/cart] [Need Authorization in header]


+ Request (application/json)
    
    Don't forget to add Authorization in your header.
    
    ```json
       {
            "cartNumber": "1566262616161",
            "month": "Janvier",
            "year": 2022,
            "default": "NULL"
        }
    ```    

+ Response 200 (application/json)

    + Body 

    ```json
        {
            "error": false,
            "message": "Vos données ont été mises à jour"
        }
    ```

### Get songs listing [GET] [/songs] [Need Authorization in header]

    + Request (application/json)
    
        Don't forget to Authorization in your header.

    + Response 200 (application/json)

        + Body

        ```json
            {
                "error": false,
                "songs": [
                    {
                        "name": "Ed Sheeran & Elton John - Merry Christmas [Official Video]",
                        "url": "https://www.youtube.com/watch?v=Q_yuO8UNGmY&list=RDCLAK5uy_ns8ghALwo2t9QqB7VBq_8FT6ktbL1XGIk&start_radio=1",
                        "cover": "Non",
                        "time": 3.29,
                        "type": "Noël",
                        "createdAt": "2021-12-27T05:17:41.123Z",
                        "updatedAt": "2021-12-27T05:17:41.123Z",
                        "id": "61c94c757562e43596004e78"
                    },
                    {
                        "name": "Meghan Trainor - Rockin' Around The Christmas Tree (Official Christmas Stroll Video)",
                        "url": "https://www.youtube.com/watch?v=a7nYyTNX6Ys&list=RDCLAK5uy_ns8ghALwo2t9QqB7VBq_8FT6ktbL1XGIk&index=4",
                        "cover": "Non",
                        "time": 2.28,
                        "type": "Noël",
                        "createdAt": "2021-12-27T05:21:35.248Z",
                        "updatedAt": "2021-12-27T05:21:35.248Z",
                        "id": "61c94d5fbfe47464c182a2c9"
                    },
                    {
                        "name": "Mariah Carey - All I Want for Christmas Is You (Make My Wish Come True Edition)",
                        "url": "https://www.youtube.com/watch?v=aAkMkVFwAoo&list=RDCLAK5uy_kOeihDkxwRjMxrIyvzrY3K-iUiWeaxZhY&start_radio=1",
                        "cover": "Non",
                        "time": 4.02,
                        "type": "Noël",
                        "createdAt": "2021-12-27T05:24:26.474Z",
                        "updatedAt": "2021-12-27T05:24:26.474Z",
                        "id": "61c94e0abfe47464c182a2ce"
                    },
                    {
                        "name": "Wham! - Last Christmas (Official Video)",
                        "url": "https://www.youtube.com/watch?v=E8gmARGvPlI&list=RDCLAK5uy_kOeihDkxwRjMxrIyvzrY3K-iUiWeaxZhY&index=4",
                        "cover": "Non",
                        "time": 4.38,
                        "type": "Noël",
                        "createdAt": "2021-12-27T05:32:57.704Z",
                        "updatedAt": "2021-12-27T05:32:57.704Z",
                        "id": "61c9500974bfad83ffee2198"
                    },
                    {
                        "name": "Andy Williams - The Most Wonderful Time Of The Year (From The Andy Williams Show)",
                        "url": "https://www.youtube.com/watch?v=73UqDX_quk0&list=RDCLAK5uy_kOeihDkxwRjMxrIyvzrY3K-iUiWeaxZhY&index=5",
                        "cover": "Non",
                        "time": 2.52,
                        "type": "Noël",
                        "createdAt": "2021-12-27T05:33:48.943Z",
                        "updatedAt": "2021-12-27T05:33:48.943Z",
                        "id": "61c9503c74bfad83ffee219b"
                    }
                ]
            }
        ```

### Get song by id [GET] [/song/{id}] [Need Authorization in header]

    + Request (application/json)

        Don't forget to add Authorization in your header and the id in query parameter.

    + Response 200 (application/json)

        + Body

        ```json
           {
                "error": false,
                "songs": {
                    "name": "Ed Sheeran & Elton John - Merry Christmas [Official Video]",
                    "url": "https://www.youtube.com/watch?v=Q_yuO8UNGmY&list=RDCLAK5uy_ns8ghALwo2t9QqB7VBq_8FT6ktbL1XGIk&start_radio=1",
                    "cover": "Non",
                    "time": 3.29,
                    "type": "Noël",
                    "createdAt": "2021-12-27T05:17:41.123Z",
                    "updatedAt": "2021-12-27T05:17:41.123Z",
                    "id": "61c94c757562e43596004e78"
                }
            }
        ``` 
