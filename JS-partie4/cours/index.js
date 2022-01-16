// XMLHttpRequest

function reqListener() {
  //console.log(this.responseText);
}
let req = new XMLHttpRequest();
req.onload = reqListener;
//req.open("get", "data.txt", true);
// req.open("get", "data.json", true);
req.open("get", "https://api.blablagues.net/?rub=blagues", true);
req.send();

// FETCH

// fetch("monlien", "objet d'options")
//   .then((response) => {
//     // response
//   })
//   .catch((error) => console.log(error));

fetch("data.txt").then((res) => res.text());
//.then((data) => console.log(data));

fetch("data.json").then((res) => res.json());
//.then((data) => console.log(data));

const myHeaders = new Headers();

const init = {
  method: "GET",
  headers: myHeaders,
  mode: "cors",
};

//fetch("data.json", init).then((res) => console.log(res));

// CRUD => Create (Post), read (Get), update (Put), Delete

// Asynchrone

setTimeout(() => {
  console.log("test");
}, 2000);

// Promise
//fetch("myLink").then((res) => res);

// asyn/await
async function fetchData() {
  await fetch("monLien");
  // attend que le await soit exécuté avant de faire la suite
  executFonction();
}

const fetchData2 = async () => {
  await fetch("monLien");
  // attend que le await soit exécuté avant de faire la suite
  executFonction();
};
