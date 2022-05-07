// create Media class
class Media {
    //  constructor with one property that is in all two subclasses of Media, and does not have a default value - title
    constructor(title) {
        this._title = title;
        // set the values for Media properties that Book and Movie share
        this._isCheckedOut = false;
        this._ratings = [];
    }
    // getters
    get title() {
        return this._title;
    }
    get isCheckedOut() {
        return this._isCheckedOut;
    }
    get ratings() {
        return this._ratings;
    }
    // setter
    set isCheckedOut(isCheckValue) {
        _this.isCheckedOut = isCheckValue;
    }
    // changes the value saved to the _isCheckedOut
    toggleCheckOutStatus() {
        this._isCheckedOut = !this._isCheckedOut;
    }
    // return the average value of the ratings array
    getAverageRating() {
        const sumRatings = this._ratings.reduce(
            (previousValue, currentValue) => previousValue + currentValue
        );
        return sumRatings / this._ratings.length;
    }
    // accepts one argument and push it to the end of the ratings array
    addRating(rating) {
        this._ratings.push(rating);
    }
}

// create Book class (extends Media class)
class Book extends Media {
    constructor(author, title, pages) {
        // passing title to the parent costructor
        super(title);
        // setting remaining arguments as properties
        this._author = author;
        this._pages = pages;
    }
    // getters
    get author() {
        return this._author;
    }
    get pages() {
        return this._pages;
    }
}

// create Movie class (extends Media class)
class Movie extends Media {
    constructor(director, title, runTime) {
        // passing title to the parent costructor
        super(title);
        this._director = director;
        this._runTime = runTime;
    }
    // getters
    get director() {
        return this._director;
    }
    get runTime() {
        return this._runtime;
    }
}

// create Book instance
const historyOfEverything = new Book(
    "Bill Bryson",
    "A Short History of Nearly Everything",
    544
);

// call method toggleCheckOutStatus()
historyOfEverything.toggleCheckOutStatus();

// control value
console.log(historyOfEverything.isCheckedOut);

// call addRating() method with inputs
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);

// call getAverageRating() method
console.log(historyOfEverything.getAverageRating());

// create Movie instance
const speed = new Movie("Jan de Bont", "Speed", 116);

// call method toggleCheckOutStatus()
speed.toggleCheckOutStatus();

// control value
console.log(speed.isCheckedOut);

// call addRating() method with inputs
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);

// call getAverageRating() method
console.log(speed.getAverageRating());
