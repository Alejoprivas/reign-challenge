
--------------

## INSTALL DATABASE

--------------

  

  

* Download the latest production release of MongoDB from [here](https://www.mongodb.com/download-center?_ga=2.123194891.1822248697.1522395660-2086062422.1522395660#production)

  

  

* Open the file to launch the wizard.

  

  

* MongoDB requires a data directory to store all data. Create the directory `/data/db` on the drive from which you'll start MongoDB.

  

  

--------------

  

## START APPLICATION

  

--------------

  

  

To launch the application start a local instance of MongoDB, open a terminal in this folder and type:

  

``` bash

  

$ npm install

  

$ npm start

  

```

  

  

Go to http://localhost:4200

  

  

--------------

  

## CONFIGURE

  

--------------

  

  

Set database config in `./server/properties.js` 

    //server/properties
    module.exports = {
    db_url: (process.env.DB_HOST || 'localhost') + ':27017/hackerNews',
    publicPath: '../client/dist',
    port: process.env.NODE_PORT || 3000,
    scrapUrl: "https://hn.algolia.com/api/v1/search_by_date?query=nodejs",
    api: process.env.NODE_API != null ? process.env.NODE_API : '/api',
    seedDB: process.env.seedDB != null ? process.env.seedDB : true   
    }
   
you can seed the database by changing the properties to true.

client environment variables are in `./server/properties.js`

	export const environment = {
	production: false,
	apiUrl: 'http://localhost:3000/api'
	};

  

--------------

  

## START WITH DOCKER

  

--------------

  

  

* To start the application with Docker:

  

  

* Install Docker

  

  

* Run command:

  

``` bash

  

docker-compose up

  

```

  

* Go to http://localhost:4200

  

  

* When code changes you need to rebuild container running:

  

``` bash

  

docker-compose up --build

  

```
