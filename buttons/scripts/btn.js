class btn {
  constructor(property) {
    let x = document.createElement("div");
    this.element = x;
    this.property = property;
  }
  display() {
    console.log(`yo tengo esta clase y estas propiedades ${this.property}`);
  }

  DynamicCss1() {
    let Dynamic = document.createElement("style");
    Dynamic.innerHTML = `
    ${this.property}
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
/*
.special{
  appearance: none;
  background-color: #000000;
  border: 2px solid #1A1A1A;
  border-radius: 15px;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
  font-family: Roobert,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  margin: 0;
  min-height: 60px;
  min-width: 0;
  outline: none;
  padding: 16px 24px;
  text-align: center;
  text-decoration: none;
  transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 100%;
  will-change: transform;
}

.special:hover {
  box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
  transform: translateY(-2px);
}

.special:active {
  box-shadow: none;
  transform: translateY(0);
}

*/
