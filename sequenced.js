/*
  Loop
    Loop On Sequences
*/

let myFriends = [1, 2, "osama", "Ahmed", "sayed", "Ali"];

let onlyNames = [];

for (let i = 0; i< myFriends.length; i++){
    if (typeof myFriends[0] === "string") {
        onlyNames.push(myFriends[0]);
    }
}

console.log(onlyNames);

//console.log(myFriends[0]);
//console.log(myFriends[1]);
//console.log(myFriends[2]);
//console.log(myFriends[3]);