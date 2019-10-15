const itemInput = document.querySelector("#item"); 
const addItemButton = document.querySelector("#addItem");
const clearItemButton = document.querySelector("#clearItem");
const itemsList = document.querySelector(".collection-items");


loadEventListeners();

function loadEventListeners (){
    addItemButton.addEventListener("click", addItem);
    clearItemButton.addEventListener("click", clearItem);

}

function addItem(event) {
   if(itemInput.value==="") {
       alert("please type into the text box!");

   }

   const itemLi = document.createElement("li");
   itemLi.className = "item";
   
   itemLi.innerText = itemInput.value;
   itemsList.appendChild(itemLi);
   
   itemInput.value = "";
   event.preventDefault();
   
   // alert("test");
} 
    function clearItems(event) {
    while (itemsList.firstChild) {
     itemsList.removeChild(itemsList.firstChild);
        }
    event.preventDefault();
           }