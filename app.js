class Media{
    constructor(title){
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = []
    }
    //creating getter and setter

    //getter
    get title(){
        return this._title;
    }
    get isCheckedOut(){
        return this._isCheckedOut;
    }
    get ratings(){
        return this._ratings;
    }

    //setter
    set isCheckedOut(value){
        return this._isCheckedOut = value;
    }

    //toggleCheckout status with reduce methood
    toggleCheckoutStatus(){
        this._isCheckedOut = !this._isCheckedOut;
    }

    //average rating using reduce methood 
    getAverageRating(){
        let ratingSum = this.ratings.reduce((currentSum, rating)=> currentSum + rating, 0)/this._ratings.length;
        return ratingSum;
    }

    //creating add method
    addRating(ratings){
        this._ratings.push(ratings);
    }
}

    //creating Book class
    class Book extends Media{
        constructor(author, title, pages){
            super(title);
            this._author = author;
            this._pages = pages;
        }
    //getter methods for author and pages
    get author(){
        return this._author;
    }
    get pages(){
        return this._pages;
    }
    }

    //creating the Movie Class

    class Movie extends Media{
        constructor(director, title, runTime){
            super(title);
            this._director = director;
            this._runTime = runTime;
        }
    //Creating the runtime for director
        get director(){
            return this._director;
        }

        get runTime(){
           return this._runTime;
        }
    }

    //Creating a Book instance
    const historyOfEverything = new Book('Bill Bryson', 'A short History of Nearly Everything');

    //calling toggleChecOutStatus on historyOf Everything
    historyOfEverything.toggleCheckoutStatus();

    // log the value
    console.log(historyOfEverything.isCheckedOut);

    //call the .addrating and average rating
    historyOfEverything.addRating(4);
    historyOfEverything.addRating(5);
    historyOfEverything.addRating(5);
    historyOfEverything.getAverageRating();
    console.log(historyOfEverything.getAverageRating());

    //Creating a Movie instance
    const speed = new Movie('Jan de Bont', 'speed', 116);

    //calling toggleCheckOutStatus on Speed
    speed.toggleCheckoutStatus();

    //log the value
    console.log(speed.isCheckedOut);

    //Call the .addrating and average rating
    speed.addRating(1);
    speed.addRating(1);
    speed.addRating(5);
    speed.getAverageRating();
    console.log(speed.getAverageRating());




