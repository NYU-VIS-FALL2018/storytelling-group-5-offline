## Restaurant Analyzer and Recommender

## Project goal
Our project goal is to analyze Yelp data and visualize the data using map views and other graphs to answer various questions to determine the best restaurant in the proximity with a type of cuisine which the user wants to eat. Users can locate their location and choose the type of cuisine they want and filter them based on their ratings. This will help them eat their favorite cuisine in the proximity at a place which has good ratings and reviews in the comments. We have tried to make this an interactive webpage for the user so that they can add filters and choose a place to eat with best of their needs.

## Main objectives:

Show correlation between ratings, location, cuisine types.
Provide a high-level view of restaurants for the user to see the best option for them. 
Show interactive relation between cuisines, location, and restaurant ratings.
A user will be able to see the most rated restaurant in the location on basis of map zoom in and zoom out.

## Data Set

URL for the DataSet: https://www.yelp.com/dataset/challenge

Dataset files used:
Business.json
Review.json 
Checkin.json
user.json

Attributes used from the data set are :
Business.json - business_id, name, city, address, postal code, longitude, latitude, stars, review_count, category, outDoorSitting
Review.json - review_id, business_id, stars 
Checkin.json - business_id, time.
User.json - user_id, user_count, reviews.

## Analytical Questions and Proxy Tasks
	
1. Which are the best restaurants available in the proximity?
Proxy Tasks: 
What is “Best” signifying in this task? ”Best” can be defined more specifically in terms of cost or based on ratings by the customers. 
Proxy Value: 
This can be calculated using the business.json file and in that, we will be using stars and review_count.
How is “Proximity” defined for suggesting the restaurants? “Proximity” is a broad term which needs to be narrowed down based on the boroughs, City, Area, Streets, and Avenues.
Proxy Values: 
This can be calculated using the business.json file and in that, we will be 
using longitude, latitude, and postal code.


2. Which are the top 5-star rating restaurants in the area? 
Proxy Tasks: 
What is the significance of “top”? Listing the restaurant with the most number of 5 stars because there may be restaurants with a single user review but a 5-star rating.
Proxy Values: 
We will be using the Review.json file, in this, we will be using stars, and in the business.json file, we will use stars and review_count.


3. How many different cuisines does the person have as an option to eat nearby?
Proxy Tasks:
Based on the current location, there may be many different types of cuisines which the person can have as options to eat. They can select the nearest one and eat there.
Proxy Values: 
business.json file provide us with the categories which will help us to determine the different cuisines and then the latitude, longitude, and postal code will provide the location of the restaurant.


4. Which restaurants open early in the morning?
Proxy Task: 
Early is not defined here, early is a relative term and depends on person to person, since it can 9:00 am also, it can be 7:00 am also. So we need to properly define the term early.
Proxy Value: 
It can be defined by using the checkin.json file, where the timing of the restaurant is defined and that will help us to classify the restaurants opening up in the morning at the earliest.


5. Which good restaurants have outdoor seating facility?
Proxy Task: 
“Good” means that the restaurant which have rating 4 and above.
Proxy Value: 
Stars attribute in the reviews.json file will help us filter if the restaurant is good or not based on if its rating is less than or greater than 4.
Outdoor Seating facility allows the restaurant to let the customers sit outside.
Proxy Value: 
There is an attribute outdoor_seating from Business.json which explicitly says if there is outdoor seating facility by the restaurant.

## Story Design
## Data Analysis
The answer to the above-mentioned questions are the following:

1. This is the overall map showing all the restaurants based on the latitude and longitude plotted on the map. This map shows the number of restaurants when the map is focussed on a particular region.

2.The above map shows the top 10 restaurants based on their number of review counts. 

3. The above is a treemap, which represents the categories of food items based on the count of star ratings.

4. The above graph shows the restaurants which open in the morning by 9:00 am

5. The above graph shows the restaurants which have outdoor sitting or not. If they have outdoor sitting then it is represented by +1, if they don’t have outdoor sitting then it is represented by -1.

## Storyboard
There have been many mobile applications which help users in finding the restaurants of their choice, but there aren’t in web applications. Web applications which we are creating will provide a much clear approach and will allow the user to filter appropriately and show the results on the map, thus the user will have a better user experience. Now, the question comes is that the mobile application is more useful to the user, but the screen size restricts the user from doing all the visualization and applies all the filters at once, hence the web application will be more powerful for the visualization purpose. The user along with filtering is able to simultaneously look the result on the map and if the user is not able to get some good results, he can just drag the slider to change the filter value and then get the desired results. Based on our experience, we decided that few key factors are very important while designing our story, like the average rating of the business, the location, price, number of ratings of the user, stars, review counts. These key factor will help us in better designing our story and also help in a better user experience. 

With this web application, we will be taking step by step approach towards helping the user in finding the desired restaurant. The first step taken would be to provide the user with the number of restaurants within the proximity of the user. Now the user can also have the restaurants with the filter of the borough or even the zip code. This can be visualized on the basis of latitude and longitude in the dataset. The next step which comes is to filter the restaurants on the basis of the desired cuisine. From the dataset, we can get which all cuisines are served by the restaurant and then filter accordingly. Once these are filters, now the user can filter the restaurants on the basis of their star rating, since each restaurant has the star count in the dataset and the user review counts. 

## Steps:

1. We have made the graph where we use the longitude and latitude to plot the restaurants on the map. We are using the size of the circles to show the rating of the restaurant where if the restaurant has a bigger circle then it has a higher rating and the restaurant with a smaller circle has a lower rating.We are plotting the restaurants on the map using the longitude and latitude.
2. Map with Circles showing the location of restaurant
![whatsapp image 2018-12-05 at 4 14 24 pm 1](https://user-images.githubusercontent.com/32939619/49546010-45dde200-f8ad-11e8-93ee-a151f49ed688.jpeg)
3. After the graph is made, we will add the treemap, which will show the various cuisines present in our dataset. Size of each cuisines depend on the star rating present corresponding to the restaurants. After this, when we hover over the each restaurant marker, we will be able to see number of reviews vs stars bar chart.
![whatsapp image 2018-12-05 at 4 14 24 pm](https://user-images.githubusercontent.com/32939619/49546011-45dde200-f8ad-11e8-88e3-bed24684b1fe.jpeg)
4. We will also be able to see a heat map which shows the number of checkins made for each timing in the whole day, which would help us answer the most busy period for the restaurants.
5. Our final solution will look something like this and will be interactive for users to show the results.

