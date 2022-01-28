// rules that loop follows
//  statement 
//  condition
//  action
const shoes =[
    "adidas",
    "nike",
    "fila",
    "plaid",
    "clutter",
    "harry potter and deathly hallows",
    "lord of the rings",
    "twilight",

];
for (let index = 0; index < shoes.length; index++){
    alert(shoes{index});
}
while loops: A while loop is cobtinuous as long as the  
conditon is true;
  
let index=0;
while(index< shoes.length){
    console.log(shoes[index]);
    index++;

    do while:-
    let i = 0;
    do {
        alert(i);
    i++;
    }while(i < 3);

    const object ={
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5,
    };
    for (const key in object){
        console.log ('${key}: ${object[key]}');
     }
