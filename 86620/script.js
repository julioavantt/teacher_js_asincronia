const img = document.querySelector("img");
const h1 = document.querySelector("h1");
const loaded = document.querySelector("#loaded");
const loading = document.querySelector("#loading");
let n = 1;
const URL = "https://pokeapi.co/api/v2/pokemon/";

const get = () => {
 fetch(URL + n)
  .then((res) => res.json())
  .then((data) => {
   img.src = data.sprites.other.home.front_default;
   h1.textContent = data.name;
  })
  .catch((err) => console.error(err));
};

const restar = () => {
 if (n >= 2) {
  n--;
  get();
 } else {
  alert("NO ME USES WEY");
 }
};

const agregar = () => {
 n++;
 get();
};

setTimeout(() => {
 loading.style.display = "none";
 loaded.style.display = "block";
 get();
}, 3000);
