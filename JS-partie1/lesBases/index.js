// Click event
const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const response = document.querySelector("p");

questionContainer.addEventListener("click", () => {
  questionContainer.classList.toggle("question-clicked");
});

btn1.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "green";
});

btn2.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "red";
});

// priorité css: <div> > #id > .class > baliseHTML

//--------------------------------------------------------------------

//  Mouse mouve
const mousemove = document.querySelector(".mousemove");

window.addEventListener("mousemove", (e) => {
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
});

window.addEventListener("mousedown", () => {
  mousemove.style.transform = "scale(2) translate(-25%, -25%";
});

window.addEventListener("mouseup", () => {
  mousemove.style.transform = "scale(1) translate(-50%, -50%)";
  mousemove.style.border = "2px solid teal";
});

questionContainer.addEventListener("mouseenter", () => {
  questionContainer.style.background = "rgba(0,0,0,0.6)";
});

questionContainer.addEventListener("mouseout", () => {
  questionContainer.style.background = "pink";
});

response.addEventListener("mouseover", () => {
  response.style.transform = "rotate(2deg)";
});

//-------------------------------------------------------------------
// Key Press event

const keypresssContainer = document.querySelector(".keypress");
const key = document.getElementById("key");

document.addEventListener("keypress", (e) => {
  key.textContent = e.key;

  if (e.key === "j") {
    keypresssContainer.style.background = "red";
  } else if (e.key === "h") {
    keypresssContainer.style.background = "pink";
  }
});

//-------------------------------------------------------
// Scroll Event

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  console.log(window.scrollY);

  if (window.scrollY > 120) {
    nav.style.top = 0;
  } else {
    nav.style.top = "-50px";
  }
});

//------------------------------------------------------------
//Forms event
const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector("select");
const form = document.querySelector("form");
let pseudo = "";
let language = "";

inputName.addEventListener("input", (e) => {
  pseudo = e.target.value;
});

select.addEventListener("input", (e) => {
  language = e.target.value;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (cgv.checked) {
    document.querySelector("form > div").innerHTML = `
    <h3>Pseudo : ${pseudo}</h3>
    <h4>Langage préféré : ${language}</h4>
    `;
  } else {
    alert("Veuillez acceptez les CGV");
  }
});

//--------------------------------------------------
// Load Event
window.addEventListener("load", () => {
  console.log("Document chargé");
});

//---------------------------------------------------------
// For Each
const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    e.target.style.transform = "scale(0.7)";
  });
});
//---------------------------------------------------------
// addEventListener VS onClick

document.body.onclick = () => {
  console.log("Click");
};

//Bubbling => fin (de base l'evelistener est paramétré en mode Bubbling)
document.body.addEventListener('Click', () => {
  console.log("click 1");
}, false 
);

// Usecapture
document.body.addEventListener('Click', () => {
  console.log("click 2");
}, true
);

//------------------------------------------------------------
// Stop propagation

//,questionContainer.addEventListener('click', (e) => {
//  e.stopPropagation();
//})

//removeEventListener

//--------------------------------------------------------------

// BOM => browser object model

//console.log(window.innerHeight); //=> hauteur de la fenetre
//console.log(window.scrollY);

//window.open('http://google.com', "cours js", "height=600, width=800");=> ouvrir une fentre
//window.close()=> fermer une fenetre

// Evénements addosées à window
// alert("hello");

// confirm
btn2.addEventListener('click', () => {
  confirm("voulez vous vraiment vous trompez?")
});

// prompt
btn1.addEventListener('click', () => {
  let answer = prompt('entrez votre nom !');

  questionContainer.innerHTML = "<h3>Bravo" + answer + "</h3>";
})

// timeout compte à rebours
setTimeout(() => {
  questionContainer.style.borderRadius = "3000px";
}, 2000) 