const title = document.querySelector("h1");
console.log(title);

title.style.color = "Red";

const menu = document.querySelector("menu");
console.log(menu);

menu.style.backgroundColor = "Red";
menu.style.fontSize = "25px";

menu.className = "main-menu";

const buttonOne = document.querySelector("button");
console.log(buttonOne);

buttonOne.addEventListener("click", ()=>{
    menu.classList.toggle("invisible");

});