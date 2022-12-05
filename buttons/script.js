var Import = document.getElementById("prueba");
import { btn } from "./scripts/btn.js";
try {
  Import.addEventListener("click", () => {
    Import.style["visibility"] = "hidden";
    console.log("modulo cargado exitosamente");
    create();
  });
} catch (error) {
  console.log("ha habido un error en la carga del modulo");
}

function create() {
  try {
    let x = new btn(
      "border: 2px solid black; background-color: green; border-radius: 20px; box-shadow: 2px 2px 2px black;"
    );
    let AddBtn1 = document.createElement("div");
    let AddBtn2 = document.createElement("div");
    AddBtn1.classList = "box";
    AddBtn2.classList = "box b";
    AddBtn2.innerText = "agregar botones";
    AddBtn2.id = "btn1";
    document.body.appendChild(AddBtn1);
    AddBtn1.appendChild(AddBtn2);

    let Add = document.getElementById("btn1");
    Add.addEventListener("click", () => {
      x.create();
      x.DynamicCss1();
    });

    let HideBtn1 = document.createElement("div");
    let HideBtn2 = document.createElement("div");
    HideBtn1.classList = "box";
    HideBtn2.classList = "box b";
    HideBtn2.innerText = "ocultar botones";
    HideBtn2.id = "btn2";
    document.body.appendChild(HideBtn1);
    HideBtn1.appendChild(HideBtn2);

    let hide = document.getElementById("btn2");
    hide.addEventListener("click", () => {
      console.log("hidden");
      x.hide();
    });

    let ShowBtn1 = document.createElement("div");
    let ShowBtn2 = document.createElement("div");
    ShowBtn1.classList = "box";
    ShowBtn2.classList = "box b";
    ShowBtn1.id = "btn3";
    ShowBtn2.innerText = "mostrar botones";
    document.body.appendChild(ShowBtn1);
    ShowBtn1.appendChild(ShowBtn2);
    let show = document.getElementById("btn3");
    show.addEventListener("click", () => {
      console.log("Unhidden");
      x.show();
    });
  } catch (error) {
    console.log("ha ocurrido un error " + error);
  }
}

/*function AddBtn() {
  let div1 = document.createElement("div");
  let div2 = document.createElement("div");
  let div3 = document.createElement("div");
  div1.classList = "box b";
  div1.id = "cbtn";
  div2.classList = "special";
  div2.id = "cbtn2";
  div3.className = "joder";
  document.body.appendChild(div3);
  div3.appendChild(div1);
  div1.appendChild(div2);
}

/*function Hide() {
  Array.from(document.getElementsByClassName("joder")).forEach(
    (element) => (element.style["visibility"] = "hidden")
  );
}

/*function UnHiden() {
  Array.from(document.getElementsByClassName("joder")).forEach(
    (element) => (element.style["visibility"] = "visible")
  );
}*/
