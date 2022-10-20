//let prueba = [1,2,3,4,5]

//prueba.push(6);//agrega un elemento al final
//prueba.unshift(0);//agrega un elemento al inicio
function init(){ 
    
let div1 = document.createElement("div"); div1.classList.add("mark");
let btn1 = document.createElement("button"); btn1.innerHTML = "crear matris y transponerla"; btn1.id = "1";
let btn2 = document.createElement("button"); btn2.innerHTML = "crear 2 matrices y sumarlas "; btn2.id = "2"; 
let btn3 = document.createElement("button"); btn3.innerHTML = "crear 2 matrices y restarlas "; btn3.id = "3"; 
let btn4 = document.createElement("button"); btn4.innerHTML = "crear 1 matrices y multiplicarla por un escalar"; btn4.id = "4"; 
let btn5 = document.createElement("button"); btn5.innerHTML = "crear 2 matrices y multiplicarlas"; btn5.id = "5";
var inp1 = document.createElement("input"); inp1.placeholder = "filas"; inp1.id = "fila";
var inp2 = document.createElement("input"); inp2.placeholder = "columnas"; inp2.id = "columna";
var inp3 = document.createElement("input"); inp3.placeholder = "escalar"; inp3.id = "escalar";
/*var inp4 = document.createElement("input"); inp4.name = "operacion"; inp4.type = "button"; inp4.value = "resta";
var inp5 = document.createElement("input"); inp5.name = "operacion";  inp5.type = "button"; inp5.value = "multiplicacion";*/
/*let lab1 = document.createElement("label"); lab1.innerText = "suma";
let lab2 = document.createElement("label"); lab2.innerText = "resta";
let lab3 = document.createElement("label"); lab3.innerText = "multiplicacion";
let lab4 = document.createElement("label"); lab4.innerText = "division";*/
    
document.body.appendChild(div1);
div1.appendChild(btn1);
div1.appendChild(btn2);
div1.appendChild(btn3);
div1.appendChild(btn4);
div1.appendChild(btn5);
div1.appendChild(inp1);
div1.appendChild(inp2);
div1.appendChild(inp3);

/*div1.appendChild(inp4);
div1.appendChild(inp5);*/
/*div1.appendChild(lab1);
div1.appendChild(lab2);
div1.appendChild(lab2);
div1.appendChild(lab3);
lab1.appendChild(inp3);
lab2.appendChild(inp4);
lab3.appendChild(inp5);*/




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
    if (f == 0 || c == 0  )
    {
        alert("las filas y las columnas no pueden estar vacias o ser 0");
        
    }
    else{
        matriz1(f,c,o);
        show2(m);
        visual("arr1" , m);
        let m4 = "";
        visual("arr2" , m4);
        trans(m);
        
    }
    
    
    });

    btn2.addEventListener("click" , function crearmatriz(f , c , o){ 
        f=inp1.value; 
        c=inp2.value; 
        
        o2=inp3.value;
        if (f == 0 || c == 0  )
        {
            alert("las filas y las columnas no pueden estar vacias o ser 0");
        }
        else{
            matriz1(f,c,o);
            matriz2(f,c,o2);
            show2(m2);
            visual("arr1" , m);
            visual("arr2" , m2);
            suma(m , m2);
        }
        });  

        btn3.addEventListener("click" , function crearmatriz(f , c , o){ 
            f=inp1.value; 
            c=inp2.value; 
            o2=inp3.value;
            if (f == 0 || c == 0  )
            {
                alert("las filas y las columnas no pueden estar vacias o ser 0");
            }
            else{
                matriz1(f,c,o);
                matriz2(f,c,o2); 
                show2(m);
                show2(m2);
                visual("arr1" , m);
                visual("arr2" , m2);
                resta(m, m2);
            }
            });  

        btn4.addEventListener("click" , function crearmatriz(f , c , e){
            f = inp1.value;
            c = inp2.value;
            e = inp3.value;
            if (f == 0 || c == 0 )
            {
                alert("las filas y las columnas no pueden estar vacias o ser 0");
            }
            if (e == 0){
                alert("el escalar no puede estar vacio o ser 0")
            }
            else{
                matriz1(f,c);
                show2(m);
                visual("arr1" , m);
                escalar(m, e);
            } 
        });

        btn5.addEventListener("click" , function crearmatriz(f , c , o){ 
            f=inp1.value; 
            c=inp2.value; 
            o2=inp3.value;
            if (f == 0 || c == 0  )
            {
                alert("las filas y las columnas no pueden estar vacias o ser 0");
            }
            else{
                matriz2(f,c,o2); 
                show2(m);
                show2(m2);
                visual("arr1" , m);
                visual("arr2" , m2);
                mult(m, m2);
            }
            }); 
        
    
console.log("libreria cargada");

}

let body = document.getElementsByName("body").onload = init();

function matriz1(f , c , o){
    switch (o) {
        case 0:
            o = "0"
            break;
        case 1:
            o = "9";
        default:
            o = "9";
            break;
    } 
   
    m = new Array(f);
    for (let index1 = 0; index1 < f; index1++) {
     m[index1] = new Array(c);
     for (let index2 = 0; index2 < c; index2++) {
         m[index1][index2] = Number(prompt("ingresa un valor para la celda" + index1 + "x" + index2 + " de la primera matriz"));
     }
    }
    /*m = new Array(f);
   for (let index1 = 0; index1 < f; index1++) {
       m[index1] = new Array(c);
       for (let index2 = 0; index2 < c; index2++) {
           m[index1][index2] = eval(generate1);
       }
   } */
}

function matriz2(f , c , o ){
    switch (o) {
       case 0:
           o = "0"
           break;
       case 1:
           o = "9";
       default:
           o = "9";
           break;

   } 
   
   const generate1 = "Math.floor(Math.random()*" +o+ ");";
   const generate2 = "Math.floor(Math.random()*" +o+ ");";
   
   m2 = new Array(f);
           for (let index3 = 0; index3 < f; index3++) {
            m2[index3] = new Array(c);
            for (let index4 = 0; index4 < c; index4++) {
                m2[index3][index4] = Number(prompt("ingresa un valor para la celda" + index3 + "x" + index4 + "de la segunda matriz"));
            }
           }
   /*m2 = new Array(f);
   for (let index3 = 0; index3 < f; index3++) {
       m2[index3] = new Array(c);
       for (let index4 = 0; index4 < c; index4++) {
           m2[index3][index4] = eval(generate2);
           
       }
   }*/

}

function suma(m1 , m2 , m3){
    m3 = new Array(m1.length);
    for (let index = 0; index < m1.length; index++) {
        m3[index] = new Array(m1.length);
        for (let index2 = 0; index2 < m1.length; index2++) {
            m3[index][index2] = m1[index][index2] + m2[index][index2];
        }
    }
    show2(m3);
    visual("arr3" , m3);
}

function resta(m1, m2, m3){
    m3 = new Array(m1.length);
    for (let index = 0; index < m1.length; index++) {
        m3[index] = new Array(m1.length);
        for (let index2 = 0; index2 < m1.length; index2++) {
            m3[index][index2] = m1[index][index2] - m2[index][index2];  
        }
    }
    show2(m3);
    visual("arr3" , m3);
}

function escalar(m1 , escalar , m3){
    let m4 = "";
    m3 = new Array(m1.length);
    for (let index = 0; index < m1.length; index++) {
        m3[index] = new Array(m1.length);
        for (let index2 = 0; index2 < m1.length; index2++) {
            m3[index][index2] = m1[index][index2] * escalar; 
        } 
    }
    visual("arr2" , m4);
    show2(m3);
    visual("arr3" , m3);
}
function mult(m1 , m2 , m3){
   
    m3 = new Array(m1.length);
    for (let index = 0; index < m1.length; index++) {
        m3[index] = new Array(m1.length);
        for(let index2 = 0; index2 < m1.length; index2++){
            m3[index][index2] = 0;
            for (let index3 = 0; index3 < m1.length; index3++) {
                m3[index][index2] = m3[index][index2] + m1[index][index3] * m2[index3][index2];
            }
        }
    }
    
    show2(m3);
    visual("arr3" , m3);
}

function trans(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            const temp = arr[i][j];
            arr[i][j] = arr[j][i];
            arr[j][i] = temp;
            show2(arr);
        }
    }
    visual("arr3" , arr);
}

function visual(x , arr){
     document.getElementById(x).innerHTML = "";
  

    for (let index = 0; index < arr.length; index++) {
        console.log(arr[index]);
        document.getElementById(x).innerHTML +=
        `<div>${arr[index]}</div>`;
        
    }
}

function show2(arr){
    for(let element in arr)
    console.log(element + "=" +arr[element]);
}