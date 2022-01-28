
  /***** Assignment *****

- Create a new HTML file that has a 'div' with a class of "intro" inside the HTML file, the 'div' content is Hello Everyone, I am new here.
- Now, create a javascript file and connect it to your HTML Page, inside the javascript file, perform the following:-

  - Create a new paragrapgh element using the methods we just learnt.
  - Give the new paragraph element a textContent of "My Name is <your name>"
  - Give the paragraph a class of "name"
  - Append the paragraph element to the 'div' in the HTML Page.
  - Create an array containing a list of your favorite books. The length of the array should be 10.
  - Loop through the array then display each book in our webpage just like we did in class.

 ***** Solution*****/


 const intro = document.querySelector(".intro");

 const newPara = document.createElement("p");

 newPara.textContent = "My Name is Theresa";
 newPara.className = "name";

 intro.append(newPara);

 const favoriteBooks = [
     'Purple Hibiscus',
     'Yellow Yellow',
     'Half Of A yellow Sun',
     'Brazen',
     'Joys of motherhood',
     '50 shades Of Grey',
     'Da vinci code',
     'Lost In the Rain',
     'A new dawn',
     'we should all be feminists', 
     ];
     
     
     for (let i = 0; i < favoriteBooks.length; i++) {
     const favoriteBook = favoriteBooks[i]; 

     displayItem(favoriteBooks);

     }
     function displayItem(item) {
        const newElement = document.createElement("p");
        newElement.textContent = item;
        newElement.className = "list-item";
        wrapper.append(newElement);
      }

     /**for (let index = 0; index < array.length; index++) {
     const element = array[index];
     
      }**/
        
     
 



    
        
