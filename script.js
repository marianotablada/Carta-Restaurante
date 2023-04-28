const navigation = document.getElementById("nav");
const menu = document.getElementById("menu");
const toastContainer = document.getElementById("toast_container");
const closedBt = document.getElementById("closed");


if (!localStorage.getItem("displayToast")){
setTimeout (() => {
  toastContainer.classList.add("activeNew");
},1500);
}

const stopDisplayinToast = () => {
  localStorage.setItem("displayToast", false);
  toastContainer.classList.remove("activeNew");
}

closedBt.addEventListener("click", () => {
  stopDisplayinToast();
  localStorage.clear();
});

menu.addEventListener("click", () => {
    navigation.style.setProperty("--childenNumber", navigation.children.length);
    navigation.classList.toggle("active");
    menu.classList.toggle("active");
});

//Captura y/o registro del boton
let mybutton = document.getElementById("myBtn");


// When the user scrolls down 80px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  // When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

