class btn {
  constructor(property, Class) {
    let x = document.createElement("div");
    this.element = x;
    this.property = property;
    //this.Class = Class;
  }
  display() {
    console.log(`yo tengo esta clase y estas propiedades ${this.property}`);
  }

  DynamicCss1() {
    let Dynamic = document.createElement("style");
    Dynamic.innerHTML = `
    .special{
    ${this.property}
    }
    `;
    document.head.appendChild(Dynamic);
  }

  addtobody() {
    document.body.appendChild(this.element);
  }

  show() {
    Array.from(document.getElementsByClassName("container")).forEach(
      (element) => (element.style["visibility"] = "visible")
    );
  }

  hide() {
    Array.from(document.getElementsByClassName("container")).forEach(
      (element) => (element.style["visibility"] = "hidden")
    );
  }

  create() {
    let div1 = document.createElement("div");
    let div2 = document.createElement("div");
    let div3 = document.createElement("div");
    div1.classList = "special";
    div1.id = "cbtn";
    div2.classList = "box";
    div2.id = "cbtn2";
    div3.className = "container";
    document.body.appendChild(div3);
    div3.appendChild(div1);
    div1.appendChild(div2);
  }
}
export { btn };

/*class btn {
  constructor(property) {
    this.property = property;
    let Div = document.createElement("div");
    Div.document.body.appendChild(a);
    Div.classList = ".box.b";
  }
  display() {
    console.log(`yo tengo estas propiedades ${this.property}`);
  }

  crear() {}

  DynamicCss1() {
    let Dynamic = document.createElement("style");
    Dynamic.innerHTML = `
    .box.a{
    ${this.property}
    }
    .box.a:active {
      background-color: black;
    }
    `;
    document.head.appendChild(Dynamic);
  }

  show() {}

  hide() {}

  addtobody() {}
}

function contar() {
  const x = new btn(
    "border-radius: 20px; box-shadow: 2px 2px 2px black; border: 2px 5px solid black; background-color: blue; height: auto; width: 250px;"
  );
  x.crear;
  x.DynamicCss1();
}

function create() {
  let x = document.createElement("div");
  document.body.appendChild(x);
  x.id = "mark";
  x.classList = "box";
  let y = document.createElement("div");
  y.id = "btn";
  y.classList = "box a";
  x.appendChild(y);
  y.addEventListener("click", () => {
    contar();
  });
  console.log("algo");
}
create();

export { btn };
*/
