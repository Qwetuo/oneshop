 One Shop
 [https://min-one-shop.herokuapp.com/]
 ======
  Idea
 -
In order to increase traffic flow to retail floors. One Shop was built with the idea of being a one stop information site for stores in Singapore. \
Other than learning about the various shops available (near them), users can also get inspiration from the pictures and information shared by the community (just like instagram but for shoppers to brag about their buy). \
Mall and store owners can also boost interest by promoting on deals or providing cashback for users with reviews that hit a certain number of 'likes'.

 Prototype Scope (Current)
 -
 Because of time restrictions, the app only supports a (fixed) search on shop category (of wallet stores) near the area at Raffles City. \
 It renders a list of search result which shows basic information of a store from google map api (e.g. their location, reference and rating). Clicking on any of the shop's card opens up a modal that shows reviews that others have written for the store on the site. (Currently only Kate Spade store have seeded data). \
 Have also added functionality for users who are logged in to create new review for the stores.
 
 
Getting Started
 ------
 The app is deployed on: [https://min-one-shop.herokuapp.com/](https://min-one-shop.herokuapp.com/)
 
Installing / Running locally
* `git clone https://github.com/Qwetuo/oneshop.git`
* incude .env.local file in client folder with `REACT_APP_GOOGLE_MAP_API` key
* include .env file in server folder with var `JWT_SECRET`
* `npm install`
* `npm start`

 
Author
 ------
 Chew Min Zhuang