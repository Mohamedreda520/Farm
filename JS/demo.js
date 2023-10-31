let menu = document.querySelector('#menubar');
let mynav = document.querySelector('nav');

let myuser = document.querySelector('#user');
let myform = document.querySelector('.search-form');

let mysearch = document.querySelector('#search');
let search = document.querySelector('.searchbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    mynav.classList.toggle('active');
}

myuser.onclick = () =>{
    myform.classList.toggle("active");
}

mysearch.onclick = () =>{
    search.classList.toggle("active");
}

//select landing page Alements
var landingpage = document.querySelector(".lainding");

//get Array of images
let imagsArray = ["../images/Animals-1.jpg", "../images/Animals-2.jpg", "../images/Animals-3.jpg", "../images/Animals-4.jpg", "../images/Animals-5.jpg", "../images/Animals-6.jpg", "../images/Animals-7.jpg", "../images/Animals-8.jpg"];



setInterval(function()  {
//Random Number
const randomNumber = Math.floor(Math.random()*imagsArray.length);

   
//change background image url
landingpage.style.backgroundImage = 'url("imags/'+imagsArray[randomNumber]+'")';

}, 10000);




