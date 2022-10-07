function izdr(){
    let x;
    x= document.getElementById("1");
    x.innerHTML=`
    <div class = "pr">
    <div class = "btn">
    <button class = "boto iz" id = "izq"> < </button>
    <button class = "boto dr" id = "der"> > </button>
    </div>
    </div>
    `;
    
let y = document.getElementById("izq");
y.addEventListener("click" , (a) => {alert("izquierda");} , true);

let z = document.getElementById("der");
z.addEventListener("click" , (b) => {alert("derecha");} , true);

function p(){
    alert("funciona");
    let q = document.getElementById("1");
    
}
}
