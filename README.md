## Restaurant Analyzer and Recommender
### By Anshul Sharma, Archit Goyal & Avaiyang Garg

Project Proposal Link: https://github.com/NYU-VIS-FALL2018/storytelling-group-5-offline/blob/master/Project%20Proposal/IV%20Project%20Proposal.pdf

Demo Link: https://nyu-vis-fall2018.github.io/storytelling-group-5-offline/

Demo Video Link: https://drive.google.com/file/d/182rBHppIN1On16LHG9tIRIuzMUf_Jw46/view

                                                             
## Project goal
Our project goal is to analyze Yelp data and visualize the data using map views and other graphs to answer various questions to determine the best restaurant in the proximity with a type of cuisine which the user wants to eat. Users can locate their location and choose the type of cuisine they want and filter them based on their ratings. This will help them eat their favorite cuisine in the proximity at a place which has good ratings and reviews in the comments. We have tried to make this an interactive webpage for the user so that they can add filters and choose a place to eat with best of their needs.

## Main objectives:

Build interactive application to answer questions about restaurants in NYC
Show which cuisines are most common on different boroughs.
Show how cuisine preferences change according to borough in NYC.
Show where restaurants cluster more in NYC.
Show most high rated restaurants in five boroughs and within boroughs too.


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
	
1. Where are the restaurants clustered in New York City Area?
Proxy Tasks: 
How is area divided in New York City? Area in New york city can be divided among the boroughs or the zip codes.
Proxy Values:
Lattitude, Longitude and city: From these three we can find the borough they belong to and where on map we can plot and identify them.

2. Which Borough in New York City has top average rated restaurants? 
Proxy Tasks: 
What is the significance of “top”? Listing the restaurant with the most number of 5 stars because there may be restaurants with a single user review but a 5-star rating.
Proxy Values: 
We will be using the Review.json file, in this, we will be using stars, and in the business.json file, we will use stars and review_count.

3. Which cuisine is most common in different boroughs of New York City?
Proxy Tasks:
Based on the current location, there may be many different types of cuisines which the person can have as options to eat. They can select the nearest one and eat there.
Proxy Values: 
business.json file provide us with the categories which will help us to determine the different cuisines and then the latitude, longitude, and postal code will provide the location of the restaurant.

4. Which are the top rated restaurants in different boroughs of New York City?
Proxy Tasks:
What is the significance of “top”? Listing the restaurant with the most number of 5 stars because there may be restaurants with a single user review but a 5-star rating.
Proxy Values: 
We will be using the Review.json file, in this, we will be using stars, and in the business.json file, we will use stars and review_count.

5. How cuisine preference change from overall New York to different boroughs?
Proxy Task:
What does change mean here? Change means how the count of restaurants of different cuisines change from whole new york city to individual boroughs.
Proxy Value: Count of Restaurants for different cuisines
What is preference?
Proxy Value: Preference is determined by the highest count of restaurants for the cuisine.

## Story Design
## Data Analysis
Data Analysis
The answer to the above-mentioned questions are the following:

1. Restaurants in New York City.


![](https://github.com/NYU-VIS-FALL2018/storytelling-group-5-offline/blob/master/img/1.png)

This is the overall map of New York City showing all the restaurants based on the latitude and longitude plotted on the map. The color range is from yellow to red for restaurants on the basis of their ratings. Red being 5 rating and yellow being lowest rated. For the image we analysed that among the five boroughs, manhattan has the most number of restaurants.
![](https://github.com/NYU-VIS-FALL2018/storytelling-group-5-offline/blob/master/img/5.png)

This map shows the number of restaurants when the map is focussed on a particular region and also showing details of the selected restaurant.


2. Which Borough have the top average rated restaurant in New York City?

The above map shows that Brooklyn has the highest average of restaurants in New York City.

The Average rating Goes by Brooklyn -> Queens -> Manhattan -> Staten Island -> Bronx.
![](https://github.com/NYU-VIS-FALL2018/storytelling-group-5-offline/blob/master/img/2.png)



3. Most common cuisine in different boroughs of New York City.

![](https://github.com/NYU-VIS-FALL2018/storytelling-group-5-offline/blob/master/img/3.png)

This shows the restaurants in Manhattan area of New York City and below is the tree map, which shows which cuisine has the highest number of restaurants in the area.
![](https://github.com/NYU-VIS-FALL2018/storytelling-group-5-offline/blob/master/img/6.png)

4. Top rated restaurants in different Boroughs of New York City.

![](https://github.com/NYU-VIS-FALL2018/storytelling-group-5-offline/blob/master/img/9.png)
For each borough, we can see the color of restaurants in the brough, which signifies their ratings and also we can change the ratings of the restaurants to filter the values.


5. Change in cuisine preference from whole New York City to different boroughs.

![](https://github.com/NYU-VIS-FALL2018/storytelling-group-5-offline/blob/master/img/4.png)

The above two graphs show that which cuisine was most common in the New York City area and which cuisine is most common in the  given borough.

## Storyboard
There have been many mobile applications which help users in finding the restaurants of their choice, but there aren’t in web applications. Web applications which we are creating will provide a much clear approach with all necessary question and answers and will allow the user to filter appropriately and show the results on the map, thus the user will have a better user experience. The user along with filtering is able to simultaneously look the result on the map and if the user is not able to get some good results, he can just drag the slider to change the filter value and then get the desired results. Based on our experience, we decided that few key factors are very important while designing our story, like the average rating of the business, the location, number of ratings of the user, stars, review counts. These key factor will help us in better designing our story and also help in a better user experience. 

With this web application, we will be taking step by step approach towards helping the user in finding the overview of restaurants in New York City and its different Boroughs. The first step taken would be to provide the user with the number of restaurants within the proximity of the user. Now the user can also have the restaurants with the filter of the borough or even the zip code. This can be visualized on the basis of latitude and longitude in the dataset. The next step which comes is to filter the restaurants on the basis of the desired cuisine. From the dataset, we can get which all cuisines are served by the restaurant and then filter accordingly. Once these are filters, now the user can filter the restaurants on the basis of their star rating, since each restaurant has the star count in the dataset and the user review counts. 


## Steps:

1. We have made the graph where we use the longitude and latitude to plot the restaurants on the map. We are using the color from yellow to red of the circles to show the rating of the restaurant where if the restaurant has a red color circle then it has a higher rating and the restaurant with a yellow color circle has a lower rating.We are plotting the restaurants on the map using the longitude and latitude.
![](https://github.com/NYU-VIS-FALL2018/storytelling-group-5-offline/blob/master/img/1.png)
2. Then show which borough has the top average rated restaurants
![](https://github.com/NYU-VIS-FALL2018/storytelling-group-5-offline/blob/master/img/2.png)

3. After the graph is made, we will add the treemap, which will show the various cuisines present in our dataset. Size of each cuisines depend on the star rating present corresponding to the restaurants. After this, when we hover over the each restaurant marker, we will be able to see number of reviews vs stars bar chart.
![](https://github.com/NYU-VIS-FALL2018/storytelling-group-5-offline/blob/master/img/3.png)
4. Then we compare the cuisine preference among different boroughs and whole new york
![](https://github.com/NYU-VIS-FALL2018/storytelling-group-5-offline/blob/master/img/4.png)
5. Our final solution will look something like this and will be interactive for users to show the results.
![](https://github.com/NYU-VIS-FALL2018/storytelling-group-5-offline/blob/master/img/2.png)

