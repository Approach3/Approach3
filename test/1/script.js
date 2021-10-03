let countEl = document.getElementById("countl");
let count = 0;
function inc() {
   count = count + 1;
   countEl.innerText = count;
}
function save() {
   console.log(count);
}
