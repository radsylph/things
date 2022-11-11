var Concepto = {
  id_Concepto: "",
  monto: "",
  decripcion: "",
  tipo: "",
};

var Empelado = {
  nombre_empleado: "",
  apellido_empleado: "",
  cedula_empleado: "",
  cargo_empelado: "",
  Concepto: [],
};

var cargo = [
  { descripcion: "programador junior", salario: 500 },
  { descripcion: "programador senior", salario: 1000 },
  { descripcion: "gerente de negocios", salario: 1500 },
  { descriptcion: "gerente tecnico", salario: 1600 },
  { descriptcion: "lider de proyecto", salario: 2000 },
  { descriptcion: "lider de diseño", salario: 2100 },
];

var bonus3 = [
  { descripcion: "bonus 1", multiplicador: 0.1 },
  { descripcion: "bonus 2", multiplicador: 0.05 },
  { descripcion: "discount 1", multiplicador: 0.1 },
  { descripcion: "discount 2", multiplicador: 0.05 },
  { descripcion: "no bono", multiplicador: 0 },
];

var prueba = {
  concepto_descripcion: "",
  concepto_multiplicador: "",
};
var data = [];
var num1 = 0;
var num2;
var num3;

function show() {
  let rol = document.getElementById("rol");
  let rol2 = rol.options[rol.selectedIndex].value;
  let bonus = document.getElementById("concepto");
  let bonus2 = bonus.options[bonus.selectedIndex].value;
  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("Apellido").value;
  let cedula = document.getElementById("cedula").value;
  let calculo = () => {
    switch (bonus2) {
      case "nb":
        num2 = 0;
        num3 = 0;
        break;
      case "b1":
        num2 = 0;
        num3 = 1;
        break;
      case "d1":
        num2 = 2;
        num3 = 2;
        break;
      case "b2":
        num2 = 1;
        num3 = 1;
        break;
      case "d2":
        num2 = 3;
        num3 = 2;
        break;
      default:
        num3 = 0;
        break;
    }
  };

  let concept = () => {
    switch (rol2) {
      case "jr":
        //alert("este es programador jr");
        if (num3 == 1) {
          return (concepto = {
            id_Concepto: 0,
            monto:
              cargo[0].salario + cargo[0].salario * bonus3[num2].multiplicador,
            descripcion: "salario con bono de jr",
            tipo: bonus2,
          });
        } else if (num3 == 2) {
          return (concepto = {
            id_Concepto: 0,
            monto:
              cargo[0].salario - cargo[0].salario * bonus3[num2].multiplicador,
            descripcion: "salario con descuento de jr",
            tipo: bonus2,
          });
        } else if (num3 == 0) {
          return (concepto = {
            id_Concepto: 0,
            monto: cargo[0].salario,
            descripcion: "salario minimo de jr",
            tipo: bonus2,
          });
        }

        break;
      case "sr":
        if (num3 == 1) {
          return (concepto = {
            id_Concepto: 1,
            monto:
              cargo[1].salario + cargo[1].salario * bonus3[num2].multiplicador,
            descripcion: "salario con bono de sr",
            tipo: bonus2,
          });
        } else if (num3 == 2) {
          return (concepto = {
            id_Concepto: 1,
            monto:
              cargo[1].salario - cargo[1].salario * bonus3[num2].multiplicador,
            descripcion: "salario con descuento de sr",
            tipo: bonus2,
          });
        } else if (num3 == 0) {
          return (concepto = {
            id_Concepto: 1,
            monto: cargo[1].salario,
            descripcion: "salario minimo de sr",
            tipo: bonus2,
          });
        }
        //alert("este es programador sr");
        break;
      case "m1":
        if (num3 == 1) {
          return (concepto = {
            id_Concepto: 2,
            monto:
              cargo[2].salario + cargo[2].salario * bonus3[num2].multiplicador,
            descripcion: "salario con bono de manager de proyecto",
            tipo: bonus2,
          });
        } else if (num3 == 2) {
          return (concepto = {
            id_Concepto: 2,
            monto:
              cargo[2].salario - cargo[2].salario * bonus3[num2].multiplicador,
            descripcion: "salario con descuento de manager de proyecto",
            tipo: bonus2,
          });
        } else if (num3 == 0) {
          return (concepto = {
            id_Concepto: 2,
            monto: cargo[2].salario,
            descripcion: "salario minimo de manager de proyecto",
            tipo: bonus2,
          });
        }
        //alert("este es manager de proyectos");
        break;
      case "m2":
        if (num3 == 1) {
          return (concepto = {
            id_Concepto: 3,
            monto:
              cargo[3].salario + cargo[3].salario * bonus3[num2].multiplicador,
            descripcion: "salario con bono de manager tecnico",
            tipo: bonus2,
          });
        } else if (num3 == 2) {
          return (concepto = {
            id_Concepto: 3,
            monto:
              cargo[3].salario - cargo[3].salario * bonus3[num2].multiplicador,
            descripcion: "salario con descuento de manager tecnico",
            tipo: bonus2,
          });
        } else if (num3 == 0) {
          return (concepto = {
            id_Concepto: 3,
            monto: cargo[3].salario,
            descripcion: "salario minimo de manager tecnico",
            tipo: bonus2,
          });
        }
        //alert("este es manager tecnico");
        break;
      case "pl":
        if (num3 == 1) {
          return (concepto = {
            id_Concepto: 4,
            monto:
              cargo[4].salario + cargo[4].salario * bonus3[num2].multiplicador,
            descripcion: "salario con bono de lider de proyecto",
            tipo: bonus2,
          });
        } else if (num3 == 2) {
          return (concepto = {
            id_Concepto: 4,
            monto:
              cargo[4].salario - cargo[4].salario * bonus3[num2].multiplicador,
            descripcion: "salario con descuento de lider de proyecto",
            tipo: bonus2,
          });
        } else if (num3 == 0) {
          return (concepto = {
            id_Concepto: 4,
            monto: cargo[4].salario,
            descripcion: "salario minimo de lider de proyecto",
            tipo: bonus2,
          });
        }
        //alert("este es lider de proyecto");
        break;
      case "pd":
        if (num3 == 1) {
          return (concepto = {
            id_Concepto: 5,
            monto:
              cargo[5].salario + cargo[5].salario * bonus3[num2].multiplicador,
            descripcion: "salario con bono de lider de diseño",
            tipo: bonus2,
          });
        } else if (num3 == 2) {
          return (concepto = {
            id_Concepto: 5,
            monto:
              cargo[5].salario - cargo[5].salario * bonus3[num2].multiplicador,
            descripcion: "salario con descuento de lider de diseño",
            tipo: bonus2,
          });
        } else if (num3 == 0) {
          return (concepto = {
            id_Concepto: 5,
            monto: cargo[5].salario,
            descripcion: "salario minimo de lider de diseño",
            tipo: bonus2,
          });
        }
        //alert("este es lider de diseño");x
        break;
      default:
        alert("error");
        break;
    }
  };

  let prueba = () => {
    empleado = {
      nombre: nombre,
      apellido: apellido,
      cedula: cedula,
      cargo: cargo[rol.selectedIndex - 1],
      concepto: concept(),
    };
    data.push(empleado);
  };

  concept();
  calculo();
  prueba();
  console.log(data);
  borrar();
}

function show3() {
  let box = document.querySelector(".box");
  let element = document.createElement("div");
  box.appendChild(element);
  element.id = "mark";
  element.className = "hola";

  /* for (let index = 0; index < data.length; index++) {
    element.innerHTML = `
  <div class = "iz"> 
  <div class = "box">
  <p>nombre del empleado ${data[index].nombre} </p>
  <p>apellido del empleado ${data[index].apellido}</p>
  <p>cedula del empleado ${data[index].cedula}</p>
  <p>salario minimo ${data[index].cargo.salario}</p>
  <p>monto total a pagar ${data[index].concepto.monto}</p>
  </div>
  </div>
  `
  } forma 1 de hacerlo, esta bien pero voy a investigar otras formas*/

  /* for (let index = 0; index < data.length; index++) {
    element.innerHTML = `
  <div class = "iz"> 
  <p>El empleado ${data[index].nombre} ${data[index].apellido}, C.I:${data[index].cedula}
  con un salario minimo de ${data[index].cargo.salario} con un total de ${data[index].concepto.monto} mas bonos</p>
  </div>
  `;
} forma 2 de hacerlo, no me gusta como queda*/

  let text = "<table border='1' id = 'mark' class = 'test'>";
  text +=
    "<tr><td>nombre</td><td>apellido</td><td>cedula</td><td>cargo</td><td>salario base</td><td>tipo de bono</td><td>salario final</td></tr> ";
  for (let index = 0; index < data.length; index++) {
    //idea investigar el uso de tablas para crear un tabla y luego insertar los datos con el for
    text +=
      "<tr><td>" +
      data[index].nombre +
      "</td>" +
      "<td>" +
      data[index].apellido +
      "</td>" +
      "<td>" +
      data[index].cedula +
      "</td>" +
      "<td>" +
      data[index].cargo.descripcion +
      "</td>" +
      "<td>" +
      data[index].cargo.salario +
      "</td>" +
      "<td>" +
      data[index].concepto.tipo +
      "</td>" +
      "<td>" +
      data[index].concepto.monto +
      "</td>" +
      "</tr>";
  }
  text += "</table>";

  element.innerHTML = text;
}
//console.log(data);

function borrar() {
  let x = document.getElementById("mark");
  while (x.hasChildNodes()) {
    x.removeChild(x.firstChild);
  }
}
