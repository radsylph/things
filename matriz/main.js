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
        font-family: comic-sans;
        padding: 15px;
        margin: 10px;
        border-radius: 5px;
        background-color: grey;

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
    } else if (op == 3){
     let e = inp3.value;
      escalar(m ,e);
    }
    else if (op == 4){
      let e = inp3.value;
       escalar(m2 ,e);
     }
     else if (op == 5) {
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

/*function determinante(m1){
        let d1;
        let d2;
        let m3 = new Array();
        for (let index = 0; index < m1.length; index++) {
            m3[index] = new Array();
            for (let index2 = 0; index2 < m1.length; index2++) {
                m3[index][index2] = new Array();
                if (index == index2){
                d1 += m3[index][index2];
                console.log(d1);
                }
                if (index + index2 == m1.length-1){
                    d2 =+ d2   +m3[index][index2];
                    console.log(d2)
                }
                
            }
        }
         console.log('Diagonal 1 = ' + d1 + ' Diagonal 2 = ' + d2 );
    }*/

function matriz1(f, c, o) {
  console.log(o);
  if (o == 0) {
    let generate = "Math.floor(Math.random()*0);";
    m = new Array(f);
    for (let index1 = 0; index1 < f; index1++) {
      m[index1] = new Array(c);
      for (let index2 = 0; index2 < c; index2++) {
        m[index1][index2] = eval(generate);
      }
    }
    return m;
  } else if (o == 1) {
    let generate1 = "Math.floor(Math.random()*0);";
    let generate2 = "Math.floor(Math.random()*0) + 1;";
    m = new Array(f);
    for (let index1 = 0; index1 < f; index1++) {
      m[index1] = new Array(c);
      for (let index2 = 0; index2 < c; index2++) {
        if (index1 == index2) {
          m[index1][index2] = eval(generate2);
        }
        if (index1 != index2) {
          m[index1][index2] = eval(generate1);
        }
      }
    }
    return m;
  } else if (o == 2) {
    m = new Array(f);
    for (let index1 = 0; index1 < f; index1++) {
      m[index1] = new Array(c);
      for (let index2 = 0; index2 < c; index2++) {
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
    return m;
  } else if (o == 3) {
    let generate3 = "Math.floor(Math.random()*10);";
    m = new Array(f);
    for (let index3 = 0; index3 < f; index3++) {
      m[index3] = new Array(c);
      for (let index4 = 0; index4 < c; index4++) {
        m[index3][index4] = eval(generate3);
      }
    }
  }
  return m;
}

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

function operacion(op, m1, m2, m3) {
  let operacion;
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
        m1[index][index2] + operacion + m2[index][index2]
      );
    }
  }
  show2(m3);
  visual("arr3", m3);
}

function escalar(m1, escalar, m3) {
  
  m3 = new Array(m1.length);
  for (let index = 0; index < m1.length; index++) {
    m3[index] = new Array(m1.length);
    for (let index2 = 0; index2 < m1.length; index2++) {
      m3[index][index2] = m1[index][index2] * escalar;
    }
  }
  show2(m3);
  visual("arr3", m3);
}
function mult(m1, m2, m3) {
  m3 = new Array(m1.length);
  for (let index = 0; index < m1.length; index++) {
    m3[index] = new Array(m1.length);
    for (let index2 = 0; index2 < m1.length; index2++) {
      m3[index][index2] = 0;
      for (let index3 = 0; index3 < m1.length; index3++) {
        m3[index][index2] =
          m3[index][index2] + m1[index][index3] * m2[index3][index2];
      }
    }
  }

  show2(m3);
  visual("arr3", m3);
}

function inversa(m1, m3, x) {
  m3 = m1;
  //recorrido del pivote
  for (let index = 0; index < m3.length; index++) {
    x = m3[index][index];
    //fila pivote
    for (let index2 = 0; index2 < m3[0].length; index2++) {
      console.log(x);
      m3[index][index2] = m3[index][index2] / x;
    }
    //convertir a 0
    if (index < m3.length - 1) {
      //filas para calcular
      for (let index3 = index + 1; index3 < m3.length; index3++) {
        //columnas para calcular
        //text
        x = m3[index3][index];
        for (let index4 = 0; index4 < m3[0].length; index4++) {
          m3[index3][index4] = m3[index3][index4] - x * m3[index][index4];
        }
      }
    }
  }
  show2(m3);
  visual("arr3", m3);
  return m3;
}

function trans(m3) {
  for (let i = 0; i < m3.length; i++) {
    for (let j = 0; j < i; j++) {
      const temp = m3[i][j];
      m3[i][j] = m3[j][i];
      m3[j][i] = temp;
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
