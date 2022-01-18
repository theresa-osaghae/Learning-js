/* Working with Javascript Objects

In our next task, we want you to have a go at creating your own object literal to represent one of your favorite bands. The required properties are:
name: A string representing the band name.
nationality: A string representing the country the band comes from.
genre: What type of music the band plays.
members: A number representing the number of members the band has.
formed: A number representing the year the band formed.
split: A number representing the year the band split up, or false if they are still together.
albums: An array representing the albums released by the band. Each array item should be an object containing the following members:
name: A string representing the name of the album.
released: A number representing the year the album was released.
Include at least two albums in the albums array.*/


const favouriteBand= {
    Name: "Destiny's child",
    Nationality: "United States of America",
    Genre: "R&B",
    Members: 4,
    Formed: 1997,
    Split: 2006,
    Albums: [
         { name: "Survivor", released:  2001},
         { name: "The Writing's on The wall", released:  1999}, 
         { name: "Destiny Fulfilled", released: 2004},  
         { name: "8 Days of Christmas", released: 2001}, 
        
    
        ],

    };

