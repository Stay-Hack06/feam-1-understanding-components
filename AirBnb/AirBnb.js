/**
 Using the image of the Airbnb UI, answer the following questions:
 1. What are four main components you see on the page?
Header
Search Bar
Listing Cards
Filters


 2. Put the components in order to show the parent/child relationship. So if component x is the mother of y and grandmother of z, you would write: 
    1. x
    2. y
    3. z
1. App
  2. Header
    3. Search Bar
      4. Filters
        5. Listing Cards



3. Which component needs access to every piece of data? Which component only needs access to the filtered data?

The component that needs access to every piece of data is likely the parent component that manages the state of all listings, App. 
The component that only needs access to the filtered data is the Listing Cards component that displays the filtered listings.


4. Think about what data we would need to know for each Airbnb listing. Recall that a Javascript object is a collection of key/value pairs. 

What are three different key/value pairs that will be needed for each listing?

id: unique identifier
title: name of the listing
location: City, State

5. Let's say we want to only see Airbnb listings that have a pool. In other words, we want to filter out all of the listings that do not have pools. Can you write some pseudo-code to accomplish this? 


Below is an example of Airbnb listing data that we would work with. 
 */

airbnbListings = [
  {
    id: 1,
    title: "Amazing Views Airbnb",
    location: "Oakland, California",
    hasPool: true,
    beachfront: false,
    lakeFront: true,
  },
  {
    id: 2,
    title: "Beachfront Paradise",
    location: "Miami, Florida",
    hasPool: true,
    beachfront: true,
    lakeFront: false,
  },
  {
    id: 3,
    title: "Cozy Forest Cabin",
    location: "Burlington, Vermont",
    hasPool: false,
    beachfront: false,
    lakeFront: false,
  },
];

const poolListings = airbnbListings.filter(listing => listing.hasPool);
console.log(poolListings);