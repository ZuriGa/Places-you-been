// Business Logic
function Places(location, landMark, timeOfYear, notes) {
    this.location = location;
    this.landMark = landMark;
    this.timeOfYear = timeOfYear;
    this.notes = notes;
}

Places.prototype.cityYear = function() {
    return this.location + " " + this.timeOfYear;
};