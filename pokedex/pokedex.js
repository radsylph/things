async function set() {
  x = document.getElementById("nombre").value;

  const url2 = "https://pokeapi.co/api/v2/pokemon/";
  const url3 = "https://pokeapi.co/api/v2/pokemon-species/";
  var url = url2 + x.toLowerCase();
  var url1 = url3 + x.toLowerCase();
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log("Api loaded");
      console.log(data);
      fetch(url1)
        .then((res) => res.json())
        .then((data) => {
          var descrip = data.flavor_text_entries;
          descrip = data.flavor_text_entries[9]["flavor_text"];
          console.log(data);
          console.log(descrip);
          y = document.querySelector("#prueba");
          y.innerHTML = descrip;
        });

      var descrip = data.species.url;
      var element = document.querySelector("#pokemon");
      let tipos = data.types.map((tipe) => tipe.type.name);
      let formas = data.abilities.map((form) => form.ability.name);
      let nombre = data.name;
      let orden = data.order;
      console.log(descrip);
      element.innerHTML = `

    <div class = "a1">
    <div class = "a2">       
    <div class = "budy">
    <div class = "a3">
    <p>Name: ${nombre}</p> 
    <p>Pokedex Number: ${orden}</p> 
    <p>Types: ${tipos}</p>
    <p>Abilities: ${formas}</p>   
    
    </div>
    </div>
    </div>
    </div>
   
    <div class ="a1 s"> 
    <div class ="a2 s"> 
    <div class ="bsprite"> 
    <img class = "sprite" src="${data.sprites.front_default}">
    <img class = "sprite" src="${data.sprites.back_default}">
  
    </div>
    </div>
    </div>
    </div>

    `;
    })
    .catch((error) => ds());
}
function ds() {
  setTimeout(() => {
    as();
    setTimeout(() => {
      cd();
    }, "2000");
  }, "10");
}

function as() {
  //prueba para que la pokebola solo se mueva cuando halla un error en el nombre del pokemon
  let obj = document.querySelector(".pokeball");
  obj.style.animation = "shake 2s ";
}

function cd() {
  let obj = document.querySelector(".pokeball");

  obj.style.animation = "nose 2s";
}

//https://www.youtube.com/watch?v=dVtnFH4m_fE
