import {books} from './books.js';
  
  //Using map to create an array of book summaries
  const bookSummaries = books.map(book=>book.getSummary());
  
  //now just log array of summaries to the console
  console.log(bookSummaries);
  