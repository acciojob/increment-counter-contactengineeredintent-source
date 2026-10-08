let count = 0;
let counterTag = document.getElementById("counter");
counterTag.innerText = 0;
function getCount(){
  alert(count);
  count++;
  counterTag.innerText = count;
}
// console.log(count);
let incrementButton = document.getElementById("incrementBtn");
incrementButton.addEventListener("click",getCount);


