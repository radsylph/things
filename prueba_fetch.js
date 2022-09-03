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
    <button>sprites</button>
    </div>
    <div class = "a2">       
    <div class = "budy">
    <div class = "a3">
    <p class="budy> Nombre del pokemon :${data.name}</p> 
    <p class="budy">Numero de pokedex :${data.order}</p> 
    <p class="budy">tipos :${tipos}</p>
    <p class="budy">habilidades :${formas}</p>  
    <p >sprites :</p>  
    </div>
    </div>
    </div>
    
    <div> 
    <img class = "sprite" src="${data.sprites.front_default}">
    <img class = "sprite" src="${data.sprites.back_default}">
    </div>
    </div>
    
   
    `;
        
           let x = document.querySelector('#sprite');
           x.innerHTML = `
           
          
          
           `; 
        
        
   })
   .catch(error=> console.log("ERROR"))
   }

   function as(){
    alert("hola")
   }
  