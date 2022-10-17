//let prueba = [1,2,3,4,5]

//prueba.push(6);//agrega un elemento al final
//prueba.unshift(0);//agrega un elemento al inicio

let body = document.getElementsByName("body").onload = init();;


function init(){

let div1 = document.createElement("div");
div1.classList.add("mark");
let btn1 = document.createElement("button");
let inp1 = document.createElement("input"); inp1.placeholder = "filas";
let inp2 = document.createElement("input"); inp2.placeholder = "columnas";
let inp3
let inp4
btn1.id = "1";
btn1.innerHTML = "crear matriz";

document.body.appendChild(div1);
div1.appendChild(btn1);
div1.appendChild(inp1);
div1.appendChild(inp2);

let content1 = document.createElement("div");
let content2 = document.createElement("div");
let content3 = document.createElement("div");
let nombre1 = document.createElement("p");
let nombre2 = document.createElement("p");

content1.classList.add("box");
content2.id = "arr1";
content3.id = "arr2";
nombre1.innerHTML = "matriz 1";
nombre2.innerHTML = "matriz 2";
document.body.appendChild(content1);
content1.appendChild(content2);
content2.appendChild(nombre1);
content1.appendChild(content3);
content3.appendChild(nombre2);

let css = document.createElement("style");
css.innerHTML = `.box {
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
console.log("libreria cargada");

}

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
show(m);
visual("arr1" , m)
show2(m);


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