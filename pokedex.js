async function set(){
    x = document.getElementById("nombre").value;

  const url2 ="https://pokeapi.co/api/v2/pokemon/";
  const url3= "https://pokeapi.co/api/v2/pokemon-species/"
    var url = url2 + x.toLowerCase();
    var url1 = url3 + x.toLowerCase();
    fetch(url)
   .then(response => response.json())
   .then(data => {
        console.log("Api loaded");
        console.log(data)
        fetch(url1)
        .then(res => res.json())
        .then(data => {
         var descrip = data.flavor_text_entries;
         descrip=data.flavor_text_entries[9]["flavor_text"];
         console.log(data);
         console.log(descrip);
         y = document.querySelector("#prueba");
         y.innerHTML = descrip;
        })
        
          var descrip = data.species.url;
           var element = document.querySelector("#pokemon");
           let tipos = data.types.map(tipe => tipe.type.name);
           let formas = data.abilities.map(form => form.ability.name);
           let nombre = data.name;
           let orden = data.order;
           console.log(descrip);
           element.innerHTML = `

    <div class = "a1">
    <div class = "a2">       
    <div class = "budy">
    <div class = "a3">
    <p>name :${nombre}</p> 
    <p>pokedex number :${orden}</p> 
    <p>types :${tipos}</p>
    <p>abilities :${formas}</p>   
    
    </div>
    </div>
    </div>

    <div class ="budy"> 
    <img class = "sprite" src="${data.sprites.front_default}"alt = "front sprite">
    <img class = "sprite" src="${data.sprites.back_default}" alt = "back sprite">
    </div>
    </div>
    </div>

    `;
    

   })
   .catch(error=> as())
   }

   /*function as(){ //prueba para que la pokebola solo se mueva cuando halla un error en el nombre del pokemon
    let obj = document.querySelector(".pokeball");
    obj.style.animation = 'shake 2s '
   }*/
   
 //https://www.youtube.com/watch?v=dVtnFH4m_fE

    