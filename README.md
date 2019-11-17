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

  

Go to http://localhost:3000

  

--------------

## CONFIGURE

--------------

  

Set database config in `properties.js`

you can seed the database by changing the properties to true.
  

--------------

## START WITH DOCKER

--------------

  

* To start the application with Docker:

  

* Install Docker

  

* Run command:

``` bash

docker-compose up

```

* Go to http://localhost:80

  
  

* When code changes you need to rebuild container running:

``` bash

docker-compose up --build

```

  
