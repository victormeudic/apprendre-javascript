const obj = {
  // index:value
  pseudo: "victor",
  ville: "Nantes",
  admin: false,
  direBonjour: function () {
    console.log("bonjour je suis " + this.pseudo);
  },
  //   direBonjour() {
  //     console.log("bonjour je suis " + this.pseudo);
  //   },
};

// Ajouter
obj.age = 24;
obj["admin"] = true;

// modifier un paramètre
obj.pseudo = "FS";

// Supprimer
delete obj.ville;
//console.log(obj);

// Checker si une propriété existe
//console.log("pseudo" in obj);
//console.log("ville" in obj);

// Parcourir l'objet
for (const key in obj) {
  //console.log(key + " : " + obj[key]);
}
//console.log(obj.direBonjour());

// Obtenir les clés
const keys = Object.keys(obj);
//console.log(keys);

// Obtenir les valeurs
const values = Object.values(obj);
//console.log(values);

const nestedArray = Object.entries(obj);
//console.log(nestedArray);

const obj2 = {
  taille: "1m80",
  poids: "75kg",
};

// Fusionner objects
const fusion = Object.assign({}, obj, obj2);
//console.log(fusion);

// Empecher les modifications
//const newObj = Object.freeze(obj);
const newObj = Object.seal(obj);
newObj.adresse = "testadresse";
newObj.pseudo = "test";

//console.log(newObj);
// ---------------------------------------------------
// Construie des objets

// Fonction constructeur
function User(pseudo, ville) {
  this.pseudo = pseudo;
  this.ville = ville;

  this.getCity = function () {
    //console.log(this.pseudo + " habite à " + this.ville);
  };
}

const user1 = new User("Victor", "Bordeaux");
const user2 = new User("Vico", "Nantes");

//console.log(user2.getCity());

//---------------------------------
// Factory function
function User3(pseudo, ville) {
  return {
    pseudo,
    ville,
  };
}
const user4 = User3("vivi", "hossegor");
//console.log(user4);

// Class

class Utilisateur {
  constructor(pseudo, ville) {
    this.pseudo = pseudo;
    this.ville = ville;
  }
  // METHODES
  sayMyName = function () {
    //console.log("Je suis " + thise.pseudo);
  };
}

const user5 = new Utilisateur("Anto", "Lyon");

Utilisateur.prototype.sayCity = function () {
  //console.log("j'habite a " + this.ville);
};

Object.assign(Utilisateur.prototype, {
  method1() {},
  method2() {},
});

// L'héritage

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  saySomething(text) {
    console.log(this.name + "dit" + text);
  }
}

class Dog extends Animal {
  run() {
    console.log("le chien cours");
  }
}

class Chat extends Animal {
  hunt() {
    console.log("je mange du thon");
  }
}

const rintintin = new Dog("Rintintin", 9);
console.log(rintintin);
