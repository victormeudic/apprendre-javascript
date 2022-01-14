// Rappel des types des donées
let string = "Chaine";
let number = 25;
let boolean = true;
let maVariable; // type undefined

// Tableaux
let array = ["Bordeaux", "Toulouse", "Nantes"];
// console.log(array[2]);

let array2 = ["Bordeaux", 24, true, [1, 2], { nom: "Denis" }];
//console.log(array2[4].nom);
let objet = {
  pseudo: "Denis",
  age: 33,
  technos: ["Javascript", "React", "NodeJs"],
  admin: false,
};

// objet.adresse = "son adresse";

// console.log(objet);

let data = [
  {
    pseudo: "Denis",
    age: 33,
    technos: ["Javascript", "React", "NodeJs"],
    admin: false,
  },
  {
    pseudo: "Samia",
    age: 24,
    technos: ["CSS", "React", "NodeJs"],
    admin: false,
  },
  {
    pseudo: "Nicolas",
    age: 42,
    technos: ["PHP", "React", "NodeJs"],
    admin: true,
  },
];

//console.log(data[2].pseudo);

//--------------------------------------
// Les structures de controle
if (data[0].age > data[1].age) {
  //console.log(data[0].pseudo + " est plus agé que " + data[1].pseudo);
} else {
}

// While
let w = 0;

while (w < 10) {
  w++;
  //console.log(w);
}

// Do while
let d = 0;

do {
  d++;
  //console.log(d);
} while (d < 5);

// Les boucles for
for (const user of data) {
  //document.body.innerHTML += `<li>${user.pseudo} - ${user.age} ans</li>`;
}

for (i = 0; i < data.length; i++) {
  //console.log(i);
  //console.log(data[i].technos[0]);
  //document.body.innerHTML += "<h2>" + data[i].pseudo + "</h2>";
}

document.body.addEventListener("click", (e) => {
  console.log(e.target.id);

  switch (e.target.id) {
    case "javascript":
      document.body.style.background = "yellow";
      break;
    case "PHP":
      document.body.style.background = "violet";
      break;
    case "python":
      document.body.style.background = "blue";
      break;
    default:
      null;
  }
});

// Méthodes Number

let number2 = 42.1234;
let numberString = "18.12 est un chiffre";

// console.log(number2.toFixed(1));
// console.log(parseInt("43"));
// console.log(parseInt(numberString));
// console.log(parseFloat(numberString));

// Maths
// console.log(Math.PI);
// console.log(Math.round(4.5));
// console.log(Math.floor(4.9));
// console.log(Math.ceil(4.1));
// console.log(Math.pow(2, 7));
// console.log(Math.sqrt(81));

//console.log(Math.floor(Math.random() * 50));

// Méthode Arrays

let array3 = ["Javascript", "Php", "Python"];
let array4 = ["Ruby", "Solidity"];

//let newArray = array3.concat(array4);
// console.log(newArray);

// let newArray = [...array3, ...array4];
// console.log(newArray);

//console.log(array3.join("-"));

// console.log(array3.slice(1));
//console.log(newArray.slice(2, 5));

//console.log(array3.indexOf("Python"));

//array3.forEach((languages) => console.log(languages));

// console.log(array3.every((languages) => languages === "P"));
// console.log(array3.some((languages) => languages === "Php"));

// let shift = array3.shift();
// console.log(array3.pop());

// const restArray = array3.splice(1, 1, "C++");
// console.log(array3);

// IMPORTANT
let arrayNumber = [4, 74, 28, 1];
//console.log(arrayNumber.reduce((x, y) => x + y));
arrayNumber.push("Coucou");
//console.log(arrayNumber);

// FILTER, SORT, MAP

// console.log(arrayNumber.filter((number) => number > 10));
// console.log(arrayNumber.sort());
//console.log(arrayNumber.sort((a, b) => a - b));

// document.body.innerHTML = arrayNumber
//   .map((number) => `<li> ${number}</li>`)
//   .join("");

// Méthodes pour les objets
document.body.innerHTML = data
  .map(
    (user) =>
      `
  <div class="user-card>
    <h2>${user.pseudo}</h2>
    <p>Age :${user.age} ans</p>
    <p>Status : ${user.admin ? "Moderateur" : "Membre"}</p>
  </div>
`
  )
  .join("");
