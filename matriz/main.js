//let prueba = [1,2,3,4,5]

//prueba.push(6);//agrega un elemento al final
//prueba.unshift(0);//agrega un elemento al inicio
function init(){ 
    
let div1 = document.createElement("div"); div1.classList.add("mark");
let btn1 = document.createElement("button"); btn1.innerHTML = "crear 1 matriz"; btn1.id = "1";
let btn2 = document.createElement("button"); btn2.innerHTML = "sumar 2 matrices"; btn2.id = "2"; 
let inp1 = document.createElement("input"); inp1.placeholder = "filas"; inp1.id = "fila";
let inp2 = document.createElement("input"); inp2.placeholder = "columnas"; inp2.id = "columna";
let inp3;
let inp4;

document.body.appendChild(div1);
div1.appendChild(btn1);
div1.appendChild(btn2);
div1.appendChild(inp1);
div1.appendChild(inp2);

let content1 = document.createElement("div"); content1.classList.add("box");
let content2 = document.createElement("div"); content2.id = "arr1";
let content3 = document.createElement("div"); content3.id = "arr2";
let content4 = document.createElement("div"); content4.id = "arr3";
let nombre1 = document.createElement("p"); nombre1.innerHTML = "matriz 1";
let nombre2 = document.createElement("p"); nombre2.innerHTML = "matriz 2";
let nombre3 = document.createElement("p"); nombre3.innerHTML = "matriz 3";

document.body.appendChild(content1);
content1.appendChild(content2);
content2.appendChild(nombre1);
content1.appendChild(content3);
content3.appendChild(nombre2);
content1.appendChild(content4);
content4.appendChild(nombre3);

let css = document.createElement("style");
css.innerHTML = `
    .box {
     display : flex; 
     justify-content: center; 
     border: 2px solid black; 
     padding: 10px; 
     margin: 2px;
     flex-direction: row;
     align-content: center;
     align-items: center;
    } 

    .mark{

    border: 2px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    margin: 10px;

    }
     
     .box > div {
    border: 2px solid black;
    padding: 5px;
    margin: 10px;
    border-radius: 4px;
    background-color: grey;
        }`;
document.head.appendChild(css);

btn1.addEventListener("click" , function crearmatriz(f , c , o){ 
    f=inp1.value 
    c=inp2.value  
    o = 1;
    if (f == 0 || c == 0 )
    {
        alert("error");
    }
    else{
        matriz(f,c,o);
        
    }
    });

    btn2.addEventListener("click" , function crearmatriz(f , c , o){ 
        f=inp1.value 
        c=inp2.value  
        o = 1;
        if (f == 0 || c == 0 )
        {
            alert("error");
        }
        else{
            matriz2(f,c,o);
        }
        });    

console.log("libreria cargada");

}

let body = document.getElementsByName("body").onload = init();

function matriz(f , c , o){
 
    switch (o) {
        case 0:
            o = "0"
            break;
        case 1:
            o = "255";
        default:
            o = "255";
            break;
    } 
    const generate = "Math.floor(Math.random()*" +  o + ");";

    let m = new Array(f);
    for (let index1 = 0; index1 < f; index1++) {
        m[index1] = new Array(c);
        for (let index2 = 0; index2 < c; index2++) {
            m[index1][index2] = eval(generate);
            
        }
    }

visual("arr1" , m)
show2(m);
console.log("matriz 1 " + m);
}

function matriz2(f , c , o){
    switch (o) {
       case 0:
           o = "0"
           break;
       case 1:
           o = "255";
       default:
           o = "255";
           break;
   } 
   
   const generate1 = "Math.floor(Math.random()*" +o+ ");";
   const generate2 = "Math.floor(Math.random()*" +o+ ");";
   let sum = "m1[index5][index6] + m2[index5][index6];";
   let sub = "m1[index5][index6] - m2[index5][index6];";
   let mult = "m1[index5][index6] * m2[index5][index6];";
   
   let m1 = new Array(f);
   for (let index1 = 0; index1 < f; index1++) {
       m1[index1] = new Array(c);
       for (let index2 = 0; index2 < c; index2++) {
           m1[index1][index2] = eval(generate1);
       }
   } 

   let m2 = new Array(f);
   for (let index3 = 0; index3 < f; index3++) {
       m2[index3] = new Array(c);
       for (let index4 = 0; index4 < c; index4++) {
           m2[index3][index4] = eval(generate2);
           
       }
   }

 
 let m3 = new Array(f);
   for (let index5 = 0; index5 < f; index5++) {
        m3[index5] = new Array(c)
        for (let index6 = 0; index6 <  c; index6++) {
            m3[index5][index6] = eval(sum);
            
        }   
   }

show(m1);
show(m2);
show(m3);
visual("arr1" , m1)
visual("arr2" , m2)
visual("arr3" , m3)



}

function show(arr){
    for (let index = 0; index < arr.length; index++) {
        console.log(arr[index])
        
    }
}

function visual(element , arr){
     document.getElementById(element).innerHTML = "";
  

    for (let index = 0; index < arr.length; index++) {
        console.log(arr[index]);
        document.getElementById(element).innerHTML +=
        `<div>${arr[index]}</div>`;
        
    }
}

function show2(arr){
    for(let element in arr)
    console.log(element + "=" +arr[element]);
}