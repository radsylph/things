function init() {
  let html = document.createElement("span");
  document.body.appendChild(html);
  html.innerHTML = `
        <div class = "mark">
        <div class = "div1">
        <button id = "1" class = "btn">crear matris 1</button> 
        <button id = "1b" class = "btn">crear matris 2</button> 
        <div class = "div2">
        <input id ="inp1" placeholder="filas">
        <input id ="inp2" placeholder="columnas">
        <input id = "inp3" placeholder = "escalar">
        </div>
        </div>
        <div class = "div3">
        <select name = "operacion" id = "operation">
        <option>--seleccione una operacion--</option>
        <option value = "0">sumar 2 matrices</option>
        <option value = "1">restar 2 matrices</option>
        <option value = "2">multiplicar 2 matrices</option>
        <option value = "3">multiplicar la matris 1 por un escalar</option>
        <option value = "4">multiplicar la matris 2 por un escalar</option>
        <option value = "5">transponer la matris 1</option>
        <option value = "6">transponer la matris 2</option>
        <option value = "7">sacar la inversa de la matris 1</option>
        <option value = "8">sacar la inversa de la matris 2</option>
        </select>

        <select name = "opcion" id = "inp0"> 
        <option>-llenado de matriz-</option>
        <option value = "0">llenar con 0</option>
        <option value = "1">matriz indentidad</option>
        <option value = "2">valores del usuario</option>
        <option value = "3">valores aleatorios</option>
        </select>
        </div>
        <button id = "6" class = "btn">realizar operacion</button>
        </div>
        <div class= "box">
        <div id = "arr1"> <p>matriz 1</p> </div>
        <div id = "arr2"> <p>matriz 2</p> </div>
        <div id = "arr3"> <p>matriz 3</p> </div>
        </div>
    `;
  let btn1 = document.getElementById("1");
  let btn1b = document.getElementById("1b");
  let btn6 = document.getElementById("6");
  let css = document.createElement("style");
  css.innerHTML = `
        body{
          background-image: linear-gradient(to right, blue, lightblue);
        }

        .box {
         display : flex; 
         justify-content: center; 
         
         padding: 10px; 
         margin: 2px;
         flex-direction: row;
         align-content: center;
         align-items: center;
        } 
        .mark{
        
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10px;
        margin: 10px;
        }
         
         .box > div {
        padding: 15px;
        margin: 10px;
        border-radius: 5px;
        background-color: white;
        border: 2px solid lightblue;  
        color: solid black;

            }
            .btn{
              width: auto;
              height: auto;
              margin: 5px;
              border-radius: 5px; 
              cursor: pointer;
              transition: padding 0.5s , font-size 0.5s;
          }  
          
          .btn:active{
              box-shadow: 2px 2px 2px 1px black;
          }
          
          .btn:hover{
            font-size: 16px;
            padding: 12;
          }
          
          .div1{
            margin: 5px;
            padding: 5px;
            align-items: center;
            align-content: center;
            flex-direction: column;
            display: flex;
          }
          
          .div2{
           margin: 2px;
              
          }
          
          .div3{
            margin: 5px;
            padding: 5px;
            align-items: center;
            align-content: center;
            flex-direction: row;
            display: flex;
          }`;
  document.head.appendChild(css);

  btn1.addEventListener("click", function crearmatriz(f, c, o) {
    f = inp1.value;
    c = inp2.value;
    o = inp0.value;

    if (f == 0 || c == 0) {
      alert("las filas y las columnas no pueden estar vacias o ser 0");
    } else {
      matriz1(f, c, o);

      show2(m);
      visual("arr1", m);
      /*let m4 = "";
      visual("arr2", m4);*/
    }
  });

  btn1b.addEventListener("click", function crearmatriz(f, c, o) {
    f = inp1.value;
    c = inp2.value;
    o = inp0.value;

    if (f == 0 || c == 0) {
      alert("las filas y las columnas no pueden estar vacias o ser 0");
    } else {
      matriz2(f, c, o);

      show2(m2);
      visual("arr2", m2);
      /*let m4 = "";
      visual("arr1", m4);*/
    }
  });

  btn6.addEventListener("click", function prueba(op) {
    op = operation.value;
    if (op == 0) {
      operacion(1, m, m2);
    } else if (op == 1) {
      operacion(2, m, m2);
    } else if (op == 2) {
      mult(m, m2);
    } else if (op == 3) {
      let e = inp3.value;
      escalar(m, e);
    } else if (op == 4) {
      let e = inp3.value;
      escalar(m2, e);
    } else if (op == 5) {
      trans(m);
    } else if (op == 6) {
      trans(m2);
    } else if (op == 7) {
      inversa(m);
    } else if (op == 8) {
      inversa(m2);
    }
  });

  console.log("libreria cargada");
}

let body = (document.getElementsByName("body").onload = init());
//funcion para crear la matris 1
function matriz1(f, c, o) {
  console.log(o);
  if (o == 0) {
    //string que genera 0's
    let generate = "Math.floor(Math.random()*0);";
    m = new Array(f);
    for (let index1 = 0; index1 < f; index1++) {
      m[index1] = new Array(c);
      for (let index2 = 0; index2 < c; index2++) {
        //operacion que llena la matriz 1 con los numeros generados por el string anterior
        m[index1][index2] = eval(generate);
      }
    }
    //se devuelve la matriz con puros 0
    return m;
  } else if (o == 1) {
    //string que genera 0's
    let generate1 = "Math.floor(Math.random()*0);";
    //string que genera 1's
    let generate2 = "Math.floor(Math.random()*0) + 1;";
    m = new Array(f);
    for (let index1 = 0; index1 < f; index1++) {
      m[index1] = new Array(c);
      for (let index2 = 0; index2 < c; index2++) {
        if (index1 == index2) {
          //condicion que llena los espacios en diagonal de la matriz con 1, siempre y cuando sea diagonal
          m[index1][index2] = eval(generate2);
        }
        if (index1 != index2) {
          //condicion que llena los espacions que no sean diagona de la matriz con 0
          m[index1][index2] = eval(generate1);
        }
      }
    }
    //se devuelve la matriz indentidad.
    return m;
  } else if (o == 2) {
    m = new Array(f);
    for (let index1 = 0; index1 < f; index1++) {
      m[index1] = new Array(c);
      for (let index2 = 0; index2 < c; index2++) {
        //aqui se llena la matriz con los numeros que ingresa el usuario
        m[index1][index2] = Number(
          prompt(
            "ingresa un valor para la celda" +
              index1 +
              "x" +
              index2 +
              " de la primera matriz"
          )
        );
      }
    }
    //se retorna la matriz con los datos que ingreso el usuario
    return m;
  } else if (o == 3) {
    //string que genera numeros aleatorios del 0 al 10
    let generate3 = "Math.floor(Math.random()*10);";
    m = new Array(f);
    for (let index3 = 0; index3 < f; index3++) {
      m[index3] = new Array(c);
      for (let index4 = 0; index4 < c; index4++) {
        //ciclo que llena la matriz con los numeros generados aleatoriamente.
        m[index3][index4] = eval(generate3);
      }
    }
  }
  //se retorna la matriz con los datos generados aleatoriamente
  return m;
}

//funcion que crea la matris 2. sus funciones son las mismas que la primera matris
function matriz2(f, c, o) {
  if (o == 0) {
    let generate = "Math.floor(Math.random()*0);";
    m2 = new Array(f);
    for (let index1 = 0; index1 < f; index1++) {
      m2[index1] = new Array(c);
      for (let index2 = 0; index2 < c; index2++) {
        m2[index1][index2] = eval(generate);
      }
    }
    return m2;
  } else if (o == 1) {
    let generate1 = "Math.floor(Math.random()*0);";
    let generate2 = "Math.floor(Math.random()*0) + 1;";
    m2 = new Array(f);
    for (let index1 = 0; index1 < f; index1++) {
      m2[index1] = new Array(c);
      for (let index2 = 0; index2 < c; index2++) {
        if (index1 == index2) {
          m2[index1][index2] = eval(generate2);
        }
        if (index1 != index2) {
          m2[index1][index2] = eval(generate1);
        }
      }
    }
    return m2;
  } else if (o == 2) {
    m2 = new Array(f);
    for (let index1 = 0; index1 < f; index1++) {
      m2[index1] = new Array(c);
      for (let index2 = 0; index2 < c; index2++) {
        m2[index1][index2] = Number(
          prompt(
            "ingresa un valor para la celda" +
              index1 +
              "x" +
              index2 +
              " de la primera matriz"
          )
        );
      }
    }
    return m2;
  } else if (o == 3) {
    let generate3 = "Math.floor(Math.random()*10);";
    m2 = new Array(f);
    for (let index3 = 0; index3 < f; index3++) {
      m2[index3] = new Array(c);
      for (let index4 = 0; index4 < c; index4++) {
        m2[index3][index4] = eval(generate3);
      }
    }
  }
  return m2;
}

//funcion que se encarga de hacer la suma y la resta de las 2 matrices
function operacion(op, m1, m2, m3) {
  let operacion; //se declara una variable operacion para poder darle el valor de la operacion que se quiere hacer
  if (op == 1) {
    operacion = "+";
  } else if (op == 2) {
    operacion = "-";
  }
  m3 = new Array(m1.length);
  for (let index = 0; index < m1.length; index++) {
    m3[index] = new Array(m1.length);
    for (let index2 = 0; index2 < m1.length; index2++) {
      m3[index][index2] = eval(
        //aqui es donde se decide si se va a sumar o a restar las 2 matrices
        m1[index][index2] + operacion + m2[index][index2]
      );
    }
  }
  show2(m3);
  visual("arr3", m3);
}

function escalar(m1, escalar, m3) {
  //funcion que multiplica por un escalar una matris
  m3 = new Array(m1.length);
  for (let index = 0; index < m1.length; index++) {
    m3[index] = new Array(m1.length);
    for (let index2 = 0; index2 < m1.length; index2++) {
      m3[index][index2] = m1[index][index2] * escalar; // aqui se multiplica toda la matris por un escalar
    }
  }
  show2(m3);
  visual("arr3", m3);
}
function mult(m1, m2, m3) {
  //funcion que multiplique 2 matrices
  m3 = new Array(m1.length);
  for (let index = 0; index < m1.length; index++) {
    m3[index] = new Array(m1.length);
    for (let index2 = 0; index2 < m1.length; index2++) {
      m3[index][index2] = 0; // se inicializa la matris en 0
      for (let index3 = 0; index3 < m1.length; index3++) {
        m3[index][index2] = //el resultado de la matris sera la suma de las multiplicaciones
          m3[index][index2] + m1[index][index3] * m2[index3][index2];
      }
    }
  }

  show2(m3);
  visual("arr3", m3);
}

function inversa(m1, m3, x) {
  // funcion que saca la inversa de una matris
  m3 = m1;
  for (let index = 0; index < m3.length; index++) {
    x = m3[index][index]; //x es nuestro pivote que va recorrer las filas, y se almacena para hacer la division
    for (let index2 = 0; index2 < m3[0].length; index2++) {
      m3[index][index2] = m3[index][index2] / x; //aqui tenemos nuestra fila pivote. al divilir la fila por el pivote
      alert(m3);
    }
    if (index < m3.length - 1) {
      // aqui se convierte en 0 los numeros que esten por debajo de la fila pivote
      for (let index3 = index + 1; index3 < m3.length; index3++) {
        //columnas para calcular la matriz inversa resultante
        x = m3[index3][index];
        for (let index4 = 0; index4 < m3[0].length; index4++) {
          m3[index3][index4] += -x * m3[index][index4];
        }
      }
    }
  }
  show2(m3);
  visual("arr3", m3);
  return m3;
}

function trans(m3) {
  for (let index = 0; index < m3.length; index++) {
    for (let index2 = 0; index2 < index; index2++) {
      const temp = m3[index][index2];
      m3[index][index2] = m3[index2][index];
      m3[index2][index] = temp;
      show2(m3);
    }
  }
  visual("arr3", m3);
}

function visual(x, m1) {
  document.getElementById(x).innerHTML = "";
  for (let index = 0; index < m1.length; index++) {
    document.getElementById(
      x
    ).innerHTML += `<div class = "matris">${m1[index]}</div>`;
  }
}

function visual2(x, m2) {
  document.getElementById(x).innerHTML = "";
  for (let index = 0; index < m2.length; index++) {
    document.getElementById(
      x
    ).innerHTML += `<div class = "matris">${m2[index]}</div>`;
  }
}

function show2(arr) {
  for (let element in arr) console.log(element + "=" + arr[element]);
}
