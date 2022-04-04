var url = 'https://pokeapi.co/api/v2/pokemon/';
var avatar = document.querySelector('#avatar');
var fullName = document.querySelector('#fullname');
var height = document.querySelector('#height');
var weight = document.querySelector('#weight');
var type = document.querySelector('#type');
var abilities = document.querySelector('#abilities');
var btn = document.querySelector('#btn');

var btn = document.querySelector("#btn");
btn.addEventListener("click", function(){
  var rndmNumber = Math.round(Math.random()*150);
  var fullURL= url + rndmNumber;
  fetch(fullURL)
  .then(handleErrors)
  .then(parseJSON)
  .then(updatePokemon)
  .catch(displayErrors);
});

function handleErrors(res){
  if(!res.ok){
    throw Error(res.status);
  }
  return res;
}

function parseJSON (res){
  return res.json()
  
}

function updatePokemon (data){
    fullname.innerText = data.name;
    height.innerText = data.height;
    weight.innerText = data.weight;
    type.innerText = data.types[0].type.name;
    abilities.innerText = data.abilities[0].ability.name
    avatar.src = data.sprites.front_default;

}

function displayErrors(err){
  console.log("INSIDE displayErrors!");
  console.log(err);
}