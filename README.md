# Build-&-Buy eCommerce Platform

> eCommerce platform built with the MERN stack & Redux.

## Description
```
An eCommerce platform where you can buy all the necessary components and peripherals to build your
best gaming station or upgrade your current system to complete and unleash the 
ultimate, efficient, powerful beast that your gaming setup aims to be.
```
```
This is still a work in progress
If you find anything buggy you can report it to me.
```

### Sample

```
Sample User Logins

sid@test.com (Admin)
sidtest

max@test.com (Customer)
maxtest

mario@test.com (Customer)
mariotest

agent47@test.com (Customer)
agent47test
```

```
Sample Payment Gateway User Logins

sb-tregl11668856@personal.example.com
Y%7XuL+g
```
### Few Screenshots

![HomeScreen](/screenshots/home.png "HomeScreen")
![AdminOrderListScreen](/screenshots/orders.png "AdminOrdersListScreen")
![AdminUsersListScreen](/screenshots/3.png "AdminUsersListScreen")
![UserProfileScreen](/screenshots/4.png "UsersProfileScreen")


## Features

- Full featured shopping cart
- Product reviews and ratings
- Top products carousel
- User profile with orders
- Admin user management
- Admin Order details page
- Mark orders as delivered option
- Checkout process (shipping, payment method, etc)
- PayPal / credit card integration
- Database seeder (products & users)




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
