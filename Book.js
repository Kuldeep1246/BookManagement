//constructor function for Book
function Book(title,author,year){
    this.title = title;
    this.author = author;
    this.year = year;
  }
  
  //adding prototype to get the summary of a Book
  Book.prototype.getSummary = function(){
    return `${this.title} by ${this.author}, published in ${this.year}`;
  }
   //Exporting the Book constructor
 export {Book};