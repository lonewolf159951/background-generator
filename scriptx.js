document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.getElementById('burgerMenu');
    const navlist = document.getElementById('nav_list');

    burgerMenu.addEventListener('click', () => {
        burgerMenu.classList.toggle('active');
        navlist.classList.toggle('show');
    });
});

var bouton = document.getElementsByTagName("button")[0];
bouton.addEventListener("click", function(){
    console.log("Clickkkkkkkkk");
})

var inp_btn = document.getElementById("enter");
var entrée = document.getElementById("user_input");
var list = document.querySelector(".edi_list ul");

inp_btn.addEventListener("click", function(){
    if (entrée.value.length > 0){
        var li_item = document.createElement("li");
        li_item.appendChild(document.createTextNode(entrée.value));
        list.appendChild(li_item);
    }
    entrée.value = ""
})

entrée.addEventListener("keypress", function(event){
    if (entrée.value.length > 0 && event.keyCode === 13){
        var li_item = document.createElement("li");
        li_item.appendChild(document.createTextNode(entrée.value));
        list.appendChild(li_item);
        entrée.value = ""
    }
    
})