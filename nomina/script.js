function show2(arr) {
  for (let element in arr) console.log(element + '=' + arr[element])
}
var Concepto = {
  id_Concepto: '',
  monto: '',
  decripcion: '',
  tipo: '',
}

var Empelado = {
  nombre_empleado: '',
  apellido_empleado: '',
  cedula_empleado: '',
  cargo_empelado: '',
  Concepto: [],
}

var cargo = [
  { descripcion: 'programador junior', salario: 500 },
  { descripcion: 'programador senior', salario: 1000 },
  { descripcion: 'gerente de negocios', salario: 1500 },
  { descriptcion: 'gerente tecnico', salario: 1600 },
  { descriptcion: 'lider de proyecto', salario: 2000 },
  { descriptcion: 'lider de diseño', salario: 2100 },
]

var bonus = [
  { descripcion: 'bonus 1', multiplicador: 0.1 },
  { descripcion: 'bonus 2', multiplicador: 0.05 },
  { descripcion: 'discount 1', multiplicador: 0.1 },
  { descripcion: 'discount 2', multiplicador: 0.05 },
]
var data = []
var num1 = 0
var num2 = 0
var num3 = 1

function show() {
  let rol = document.getElementById('rol')
  let rol2 = rol.options[rol.selectedIndex].value
  let bonus = document.getElementById('concepto')
  let bonus2 = bonus.options[bonus.selectedIndex].value
  let nombre = document.getElementById('nombre').value
  let apellido = document.getElementById('Apellido').value
  let cedula = document.getElementById('cedula').value

  let calculo = () => {
    switch (bonus2) {
      case 'nb':
        num3 = 0;
        break
      case 'b1':
        num3 = 1;

        break
      case 'd1':
        num3 = 3;

        break
      case 'b2':
        num3 = 2;

        break
      case 'd2':
        num3 = 4;

        break
      default:
        num3 = 1;

        break
    }
  }

  let concept = () => {
    switch (rol2) {
      case 'jr':
        //alert("este es programador jr");
        return (concepto = {
          id_Concepto: 1,
          monto: cargo[0].salario + cargo[0].salario * bonus[num3].multiplicador,
          descripcion: 'salario minimo de jr',
          tipo: bonus2,
        })
        break
      case 'sr':
        return (concepto = {
          id_Concepto: 2,
          monto: cargo[1].salario + cargo[1].salario * bonus[num3].multiplicador,
          descripcion: 'salario minimo de sr',
          tipo: bonus2,
        })
        //alert("este es programador sr");
        break
      case 'm1':
        return (concepto = {
          id_Concepto: 3,
          monto: cargo[2].salario + cargo[2].salario * bonus[num3].multiplicador,
          descripcion: 'salario minimo de gerente de negocios',
          tipo: bonus2,
        })
        //alert("este es manager de proyectos");
        break
      case 'm2':
        return (concepto = {
          id_Concepto: 4,
          monto: cargo[3].salario + cargo[3].salario * bonus[num3].multiplicador,
          descripcion: 'salario minimo de gerente tecnico',
          tipo: bonus2,
        })
        //alert("este es manager tecnico");
        break
      case 'pl':
        return (concepto = {
          id_Concepto: 5,
          monto: cargo[4].salario + cargo[4].salario * bonus[num3].multiplicador,
          descripcion: 'salario minimo de lider de proyecto',
          tipo: bonus2,
        })
        //alert("este es lider de proyecto");
        break
      case 'pd':
        return (concepto = {
          id_Concepto: 6,
          monto: cargo[5].salario + cargo[5].salario * bonus[num3].multiplicador,
          descripcion: 'salario minimo de lider de dise;o',
          tipo: bonus2,
        })
        //alert("este es lider de diseño");
        break
      default:
        alert('error')
        break
    }
  }

  let prueba = () => {
    empleado = {
      nombre: nombre,
      apellido: apellido,
      cedula: cedula,
      cargo: cargo[rol.selectedIndex],
      concepto: concept(),
    }
    data.push(empleado)
  }

  concept()
  calculo()
  prueba()
  show2(data)
}

function show3() {
  let element = document.createElement('div')
  document.body.appendChild(element)
  for (let index = 0; index < data.length; index++) {
    let text = document.createElement('p')
    text.innerHTML =
      data[index].concepto.id_Concepto +
      '  ' +
      data[index].nombre +
      + " " + ' . ' +
      data[index].apellido +
      " " + ' . ' +
      data[index].cargo.descripcion +
      ' con un salario de ' +
      data[index].cargo.salario +
      'del cual maneja un total de' +
      data[index].concepto.monto
    element.appendChild(text)
  }
}
