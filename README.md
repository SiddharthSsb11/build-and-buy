# Build-&-Buy eCommerce Platform

> eCommerce platform built with the MERN stack & Redux.

## Description
```
An eCommerce platform where you can buy all the necessary components and peripherals to build your
best gaming station or upgrade your current system to complete and unleash the 
ultimate, efficient, powerful beast that your gaming setup aims to be.
```
This application uses [React JS](https://reactjs.org/docs/getting-started.html) component oriented UI creation paradigm. All components are written in [JSX](https://reactjs.org/docs/jsx-in-depth.html) and ES6 style and are
combined to get a single build for production purpose using [Webpack 5](https://webpack.js.org/concepts/).

Back end is implemented using [Node JS](https://nodejs.org/en/docs), [Express JS](https://expressjs.com/en/api.html) and [MongoDB](https://docs.mongodb.com/). [Atlas](https://www.mongodb.com/cloud/atlas), the _Cloud_ version of [MongoDB](https://docs.mongodb.com/) is used. 

```
If you find any bugs you can report it to me.
Pull requests are always welcome. For major changes, 
please open an issue first to discuss what you would like to change.
```

## Sample

```
Sample User Logins
```

| Email | Password  |
| -------- | --------- |
| sid@test.com (Admin) | sidtest |
| max@test.com (Customer) | maxtest |
|mario@test.com (Customer) | mariotest |


**Sample Payment Gateway User Logins** 

| Email | Password  |
| -------- | --------- |
| sb-tregl11668856@personal.example.com | Y%7XuL+g |

```
Or create a paypal USA developers account by going on  https://developer.paypal.com/developer/applications
and use your personal account type for making payments.
```

### Few Screenshots

![HomeScreen](/screenshots/home.png "HomeScreen")
![AdminOrderListScreen](/screenshots/orders.png "AdminOrdersListScreen")
![AdminUsersListScreen](/screenshots/3.png "AdminUsersListScreen")
![UserProfileScreen](/screenshots/4.png "UsersProfileScreen")


## Features

- Full featured shopping cart
- It is a Full Stack Application
- Product reviews and ratings
- Top products carousel
- User profile with orders
- Admin user management
- Admin Order details page
- Mark orders as delivered option
- Checkout process (shipping, payment method, etc)
- PayPal / credit card integration
- Database seeder (products)
- All of the data is stored in the database i.e. <i>persistant</i>


## Hosted/Deployed

https://buildbuy.herokuapp.com/ 

## Usage

### Env Variables

Create a .env file in then root and add the following

```
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = 'your secret'
PAYPAL_CLIENT_ID = your paypal client id
```

### Install Dependencies (frontend & backend)

```
npm install
cd frontend
npm install
```

### Run

```
# Run frontend (:3000) & backend (:5000)
npm run dev

# Run frontend only
cd frontend
npm start 

# Run backend only
npm run server
```

## Build & Deploy

```
# Create frontend prod build
cd frontend
npm run build
```

There is a Heroku postbuild script, so if you push to Heroku, no need to build manually for deployment to Heroku

### Seed Database

You can use the following commands to seed the database with some sample users and products as well as destroy all data

```
# Import data
npm run data:import
# Destroy data
npm run data:destroy
```
