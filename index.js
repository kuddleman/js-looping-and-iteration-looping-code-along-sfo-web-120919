// Code your solutions in this file
function writeCards(arrayOfNames, eventName) {
   const messageArray = [];

   for (let i = 0; i < arrayOfNames.length; i++) {
     let individualName = arrayOfNames[i];

     let individualMessage = `Thank you, ${individualName}, for the wonderful ${eventName} gift!`;
     messageArray.push(individualMessage);
   }

   return messageArray;

}

const countDown = (num) => {

let i = num;
  while (i >= 0) {
    console.log(i)
    i--
  }
}