# Back-end Project

This project is the back-end for the bycoders_ test

## Project Setup

```sh
$ npm install
```

### Database configuration
First of all you need to hava installed the MySQL, after installed everything you need to create a database and run this command do create the `operations` table.
```SQL
CREATE TABLE operations(
   id INT NOT NULL AUTO_INCREMENT,
   type INT NOT NULL,
   value DOUBLE NOT NULL,
   ownerName VARCHAR(255) NOT NULL,
   cpf VARCHAR(11) NOT NULL,
   card VARCHAR(12) NOT NULL,
   storeName VARCHAR(255) NOT NULL,
   date DATETIME,
   createdAt DATE,
   updatedAt DATE,
   PRIMARY KEY ( id )
);
```
*The **DB configs** are at `routes/api.js`, so if you want to change something is there everything is (yes, i'm lazy and don't like back-end so i put everything there).*

### Start the server

```sh
$ npm run start
```

### API Docs

#### File upload route
The route to upload the CNAB file.

route `/api/upload`
method `POST`
return `nothing`

#### Operations route
Will return a list of all the operations that are in the database.

route `/api/operations`
method `GET`
return EX: 
```JSON
[
  {
    "id": 1,
    "type": 3,
    "ownerName": "JOÃO MACEDO",
    "storeName": "BAR DO JOÃO",
    "cpf": "09620676017",
    "card": "4753****3153",
    "date": "2019-03-01T18:34:53.000Z",
    "value": 14200,
    "createdAt": "2022-02-13",
    "updatedAt": "2022-02-13"
  },
]
```