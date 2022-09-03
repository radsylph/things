function set(){
    x = document.getElementById("nombre").value;

    var url2 ="https://pokeapi.co/api/v2/pokemon/";
    var url = url2 + x;
    fetch(url)
   .then(response => response.json())
   .then(data => {
        console.log("Api loaded");
           let element = document.querySelector("#pokemon");
           let tipos = data.types.map(tipe => tipe.type.name);
           let formas = data.abilities.map(form => form.ability.name);
           var movi = data.moves.map(moves => moves.move.name);
           element.innerHTML = `
          
    

    <div class = "a1">
    <div class = "bsprite">
    </div>
    <div class = "a2">       
    <div class = "budy">
    <div class = "a3">
    <p class="budy> Nombre del pokemon :${data.name}</p> 
    <p class="budy">Numero de pokedex :${data.order}</p> 
    <p class="budy">Tipo :${tipos}</p>
    <p class="budy">Habilidades :${formas}</p>    
    </div>
    </div>
    </div>

    <div class ="budy"> 
    <img class = "sprite" src="${data.sprites.front_default}">
    <img class = "sprite" src="${data.sprites.back_default}">
    </div>
    </div>
    `;
   })
   .catch(error=> console.log("ERROR"))
   }

   function as(){
    alert("hola")
   }
 

    