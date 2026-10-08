//your JS code here. If required.
let count = 0;
function getCount(){
  count++;
  counterTag.innerText = count;
}
// console.log(count);
let incrementButton = document.getElementById("incrementBtn");
incrementButton.addEventListener("click",getCount);
let counterTag = document.getElementById("counter");

