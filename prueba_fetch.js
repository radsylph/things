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


 <div class="header">
  <div class="budy"><p>nombre del pokemon :${data.name} </p> 
    <p class="budy">Numero de pokedex :${data.order}</p> 
    <p class="budy">tipos :${tipos}</p>
    <p class="budy">habilidades :${formas}</p>  
    <p >sprites :</p>  
     </div>
      </div>
    <aside class ="ded">  
    <div> <img class = "sprite" src="${data.sprites.front_default}"></div>
    <div><img class = "sprite" src="${data.sprites.back_default}"></div>
    </aside>
    
    
    

    `;
        
           let x = document.querySelector('#sprite');
           x.innerHTML = `
           
          
          
           `; 
        
        
   })
   .catch(error=> console.log("ERROR"))
   }

  