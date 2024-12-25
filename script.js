// const newButton = document.getElementById("newBtn");
// const divElem = document.getElementById("text");

// newButton.addEventListener("click", function(){
// divElem.textContent = "Jauns teksts";
// })

// const newBtn = document.getElementById("newBtn");
// const taskList = document.getElementById("taskList");
// const listitems = document.querySelectorAll(".header__items");
// const newInput = document.getElementById("input");
// const errorElem = document.getElementById("error");

// newBtn.addEventListener("click", function(){
//     const newElem = document.createElement("li");
//     newElem.textContent = newInput.value;
//     taskList.appendChild(newElem);
//     if(newInput.value === ""){
//         errorElem.style.display = "block";
//     }else{
//         errorElem.style.display = "none";
//     }
// })

// const newBtn = document.getElementById("changeColorButton");
// const newColor = document.getElementById("colorDiv");

// newBtn.addEventListener("click", function(){
//     // Nejaušas krāsas ģenerēšana
//     const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    
//     // Maina izvēlētā elementa fonu uz nejaušo krāsu
//     newColor.style.backgroundColor = randomColor;
// });
// const newElem = document.getElementById("deleteMe");
// const myBtn = document.getElementById("deleteButton");

// myBtn.addEventListener("click",function(){
//     newElem.remove()
// })
const newInput = document.getElementById("nameInput");
const newBtn = document.getElementById("submitButton");
const errorMesssage = document.getElementById("errorMessage");
const successMessage = document.getElementById("successMessage");


newBtn.addEventListener("click", function(){
    if(newInput.value === ""){
        errorMesssage.style.display = "block";
        successMessage.style.display = "none";
    }else{
successMessage.style.display = "block";
errorMesssage.style.display = "none";
    }
})