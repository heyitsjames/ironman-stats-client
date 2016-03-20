# react-redux-client-scaffold
Scaffold for React + Redux client application.

#Setup

In order to set up the scaffold and get it running just clone the repo and inside the main directory of the repo run the following commands:

1. `npm install`
2. `npm start`

Initially there are two routes, "/" and "/hello". Visit the routes and check out the code to see what is going on. The routes are declared in the `routes.js` file.

#Deployment

Deploying circumvents the use of node since it is only really used to run the webpack build in development. In production just point NGINX at the index.html file and make sure it can also route to the `dist` folder as well. Then clone the repo on production and run these commands inside the main directory of the repo:

1. `npm install`
2. `npm run build`

The `npm run build` command will build your `bundle.js` and `main.css` files and write them to the `dist` folder.
