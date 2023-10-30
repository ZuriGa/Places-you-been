Describe: Website were you can keep track of all the places you've been. 

Test: It should create a places function.
Code: function City(location, landmarks, timeOfYear, notes);
Output: location, landmarks, timeOfYear, notes

Test: It should add a prototype method to call on the city and timeOfYear together.
Code: City.prototype.cityYear = function() 
Output: location and time of year together.

Test: It should store location, landmarks, timeOfYear and notes information to our City Book. 
Code: function CityBook()
Output: empty object

Test: It should add new places to our CityBook by creating a prototype method.
Code: CityBook.prototype.addPlaces = function(city)
Output: California: city, New York: city

