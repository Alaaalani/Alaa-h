/*
 Arrays Methods [slicing]
  slice(start [Opt], End [Opt] Not Including End)
  slice() => All Array
  If start Is Undefined => 0
  Negative Count From End 
  If End Is Undefined || > Indexes => Slice To The End Array lenght
  Return New Array
  splice(start [Mand], DeleteCount [Opt] [0 No Remove], The Items To Add [Opt])
  if Negative => start From The End 
*/

let myfriend = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"]
console.log(myfriend.slice());
console.log(myfriend.slice(1));
console.log(myfriend.slice(1,3));
console.log(myfriend.slice(-3));
console.log(myfriend.slice(1, -2));
console.log(myfriend.slice(-4, -2));
console.log(myfriend);

// myfriend.splice(1,2, "sameer", "samara");

console.log(myfriend);

