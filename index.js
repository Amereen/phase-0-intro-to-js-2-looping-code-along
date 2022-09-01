// Code your solutions in this filefir 

// for (let age = 30; age < 40; age ++){
//   console.log (`I'm ${age} years old. Happy birthday to me`);
//   debugger;
// }

const gifts= ["teddy bear", "drone","doll"];

function wrapGifts(gifts){
  for (let i= 0; i < gifts.length; i++){
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }
  return gifts;
}
wrapGifts(gifts);

const  myArray= ["Cat","Rabbit","horse"]
const myEvent= "Surprise"

function writeCards(arrayOfStrings,eventName){
  let myArray=[]
  for (let i= 0; i < arrayOfStrings.length; i++){
  myArray.push(`Thank you, ${arrayOfStrings[i]}, for the wonderful surprise gift!`)

}
return myArray
}
writeCards(myArray,myEvent)

function countDown(number){
  while (number >= 0){
    console.log(number)
number --
  }

}
