// Business Logic for CityBook---
function CityBook() {
    this.places = {};
}

CityBook.prototype.addPlaces = function(city) {
    this.places[city.location] = city;
};


// Business Logic for City---
function City(location, landMark, timeOfYear, notes) {
    this.location = location;
    this.landMark = landMark;
    this.timeOfYear = timeOfYear;
    this.notes = notes;
}

City.prototype.cityYear = function() {
    return this.location + " " + this.timeOfYear;
};