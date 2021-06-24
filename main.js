//alert('Hello'); 
//console.log(document.querySelector('.group'));  //selects everything with class name group 
//DOM - document object model 
//some document properties 
console.dir(document); //gives us all information about document in console 
console.log(document.URL); 
console.log(document.title); 
console.log(document.doctype); 
console.log(document.head); 
console.log(document.body); 
//console.log(document.all); 
console.log(document.all[8]); 
//document.all[8].textContent = "Hello"; 
console.log(document.forms); 
console.log(document.links); 
console.log(document.images); 
//document.title = 123; //change title 
//console.log(document.title); 

console.log(document.getElementsByTagName("li")); 
//changes bottom border 
const title = document.all[8]; 
title.style.borderBottom = "solid 2px blue";  

const userLink = document.getElementById("user"); 
console.log(userLink); 
const ex = document.getElementsByClassName("group"); 
console.log(ex[1]); 
//ex[1].textContent = "Hi"; 
//ex[1].style.backgroundColor = "red";  
//for loop that changes font color 
for (var i = 0; i < ex.length; i++) { 
    ex[i].style.color = "#000040"; 
}  

const head = document.querySelector(".title"); 
head.style.borderBottom = "solid 2px coral";  

//changes submit button to SUBMIT 
var sub = document.querySelector('input[type = "submit"]'); 
sub.value = "SUBMIT";  

const groups = document.querySelectorAll(".group"); 
console.log(groups);  

const items = document.querySelector('.group'); 
console.log(items.parentNode); //picks parent 
items.parentNode.parentNode.style.backgroundColor = "#f4f4f4"; //changes colour of box 
//children nodes of items 
console.log(items.childNodes); 
console.log(items.children); 
console.log(items.nextSibling); 
console.log(items.nextElementSibling); 
console.log(items.previousSibling);  

//same thing as above 
const items2 = document.querySelector('.group'); 
console.log(items.parentElement); //picks parent 
items2.parentElement.parentElement.style.backgroundColor = "#f4f4f4"; //changes colour of box  

//creates a new empty div 
const newDiv = document.createElement("div"); 
newDiv.className = "temp"; 
newDiv.id = "hello"; 
newDiv.setAttribute("title", "temp div"); 
const newText = document.createTextNode("Testing"); 
newDiv.appendChild(newText); 
console.log(newDiv);  

//changes background color of every other value 
/* const odd = document.querySelectorAll("li:nth-child(odd)"); 
for (var i = 0; i < odd.length; i++) { 
    odd[i].style.backgroundColor = "#000040"; 
}*/  

const ul = document.querySelector(".temp"); 
//ul.remove(); // removes the entire list 
ul.lastElementChild.remove(); //removes the last element 
//ul.firstElementChild.remove(); //removes first element 
ul.firstElementChild.textContent = "Renamed"; //changed the name for an element 
//ul.children[1].textContent = "Ena"; //another way to rename 
ul.children[1].innerHTML = "<h2>Test</h2>"; //can change HTML here  

const btn = document.querySelector(".button"); 
//btn.style.background = "coral"; //can change colour of button  

//used when submit button is clicked 
/* 
btn.addEventListener("click", (e) => { 
    e.preventDefault(); 
    console.log('click'); 
    console.log("EVENT TYPE: " + e.type); //type of event 
    console.log(e.clientX); //where button is clicked on X axis 
    console.log(e.clientY); //where button is clicked on Y axis 
    console.log(e.target); //everytime button is clicked target is shown 
    console.log(e.target.className); //everytime button is clicked class name is shown 
    console.log(e.target.className); //returns name of class 
    console.log(e.target.id); //returns id if there is one 
    document.querySelector(".questions").style.background = "#ccc"; // changes colour of form when submit is clicked 
    ul.lastElementChild.innerHTML = "<h1>Hello</h1>"; //when button is clicked changes list 
})*/  

//used when you hover over submit button (mousover) 
//mouseout used when you hover and exit  

btn.addEventListener("mouseout", (event) => { 
    event.preventDefault(); 
    document.querySelector(".questions").style.background = "#ccc"; // changes colour of form when submit is hovered 
    ul.lastElementChild.innerHTML = "<h1>Hello</h1>";  
    document.querySelector(".total").style.color = "red"; //changes font to red if hover 
})  

//EVENTS WITH MOUSE 
//btn.addEventListener("dblclick", run); //if event is a double click 
//btn.addEventListener("mousedown", run); //mousedown event 
//btn.addEventListener("mouseup", run); //mouseup event 
var box = document.getElementById("box"); 
//box.addEventListener("mouseenter", run); //mouseenter a certain area 
//box.addEventListener("mouseleave", run); //mouseleave a certain area 
//box.addEventListener("mouseover", run); //mouseover a certain area 
box.addEventListener("mousemove", run); //mousemove a certain area 
function run(e) { 
    console.log("EVENT TYPE: " + e.type); //type of event 
    //color of box changes if you move mouse over it 
    box.style.backgroundColor = "rgb(" + e.offsetX + "," + e.offsetY + ",60)"; 
    //document.body.style.backgroundColor = "rgb(" + e.offsetX + "," + e.offsetY + ",40)"; //chanfes background color as you hover over box 
}  

//EVENTS WITH INPUT 
var inp = document.querySelector('input[type = "text"]'); 
//inp.addEventListener("keydown", running); //when you start to press down on key 
//inp.addEventListener("keyup", running); //when you finish pressing down
//inp.addEventListener("keypress", running); //when you are pressing 
//inp.addEventListener("focus", running); //focus on input 
//inp.addEventListener("blur", running); //blur input 
//inp.addEventListener("cut", running); //cut event 
//inp.addEventListener("paste", running); //paste event 
//inp.addEventListener("copy", running); //copy event 
inp.addEventListener("input", running); //anything with input  

function running(e) { 
    console.log("EVENT TYPE: " + e.type); //type of event 
}  

const form = document.querySelector(".questions"); 
const firstN = document.querySelector("#first"); 
const lastN = document.querySelector("#last"); 
const em = document.querySelector("#email"); 
const ques = document.querySelector("#area"); 
const message = document.querySelector(".message"); 
const users = document.querySelector("#user");  

form.addEventListener("submit", onSub);  

function onSub(e) { 
    e.preventDefault(); 
    if (firstN.value === '' || lastN.value === '' || em.value === '' || ques.value === '') { 
        //styling class in CSS 
        message.classList.add("error"); 
        //adds this information if above condition is met 
        message.innerHTML = "Please enter all of the above information"; 
        //timer for 3 seconds 
        setTimeout(() => message.remove(), 3000); 
    } 
    else { 
        //console.log("success") //prints success to console 
        //printing info to screen 
        const li = document.createElement('li'); 
        li.appendChild(document.createTextNode(`${firstN.value}: ${lastN.value}: ${em.value}`)); 
        li.innerHTML = `<strong>${firstN.value}</strong> <strong>${lastN.value}</strong>: ${em.value}`; 
        users.appendChild(li);  
        
        //reset fields 
        firstN.value = ''; 
        lastN.value = ''; 
        em.value = ''; 
        ques.value = ''; 
    } 
}