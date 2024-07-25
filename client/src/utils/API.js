
import {books} from 'google-books-search'

function bookQuery(searchTerm) {
    return new Promise((resolve, reject) => {
      books.search(searchTerm, function (error, results) {
        if (!error) {
          const cleanResults = results.map((result) => {
            if (result.subtitle) {
              result.title = result.title + ": " + result.subtitle;
            }
            console.log(result.industryIdentifiers)
            if (result.industryIdentifiers){

            result.industryIdentifiers = result.industryIdentifiers[0].identifier}
          
            if (!result.publishedDate) {
              result.publishedDate = "not listed";
            }
            result.publishedDate = result.publishedDate.substring(0, 4);
            if (!result.description) {
              result.description = "not listed"; // Some results do not have descriptions, so we force one on it.
            }
            result.buylink = result.link
            result.fulldescription = result.description;
            result.description = result.description.substring(0, 265) + "...";
  
            return result;
          })
  
          resolve(cleanResults)
          console.log(cleanResults);
        } else {
          reject(error);
        }
      });
    });
  }
  
//  module.exports = { bookQuery };
  


export default bookQuery;
