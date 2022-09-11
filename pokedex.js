function set(){
    x = document.getElementById("nombre").value;

    var url2 ="https://pokeapi.co/api/v2/pokemon/";
    var url = url2 + x;
    fetch(url)
   .then(response => response.json())
   .then(data => {
        console.log("Api loaded");
        console.log(data)
           let element = document.querySelector("#pokemon");
           let tipos = data.types.map(tipe => tipe.type.name);
           let formas = data.abilities.map(form => form.ability.name);
           let nombre = data.name;
           let orden = data.order;
           element.innerHTML = `
    
    <div class = "a1">
    <div class = "a2">       
    <div class = "budy">
    <div class = "a3">
    <p> Nombre del pokemon :${nombre}</p> 
    <p>Numero de pokedex :${orden}</p> 
    <p>${tipos}</p>
    <p>${formas}</p>    
    </div>
    </div>
    </div>
    </div>
   
    <div class ="a1 s"> 
    <div class ="a2 s"> 
    <div class ="bsprite"> 
    <img class = "sprite" src="${data.sprites.front_default}">
    <img class = "sprite" src="${data.sprites.back_default}">
    <div class="botones">
    </div>
    </div>
    </div>
    </div>
    </div>
    
    `;
   })
   .catch(error=> console.log("ERROR"))
   }
 //https://www.youtube.com/watch?v=dVtnFH4m_fE

    