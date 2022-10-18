var one = document.getElementById("1");
var two = document.getElementById("2");
var three = document.getElementById("3");
var four = document.getElementById("4");
var five = document.getElementById("5");
var six = document.getElementById("6");
var seven = document.getElementById("7");
var eight = document.getElementById("8");
var nith = document.getElementById("9");
var zero = document.getElementById("0");
var result = document.getElementById("screen");
var reset = document.getElementById("reset");
var del = document.getElementById("delete");
var sum = document.getElementById("+");
var sub = document.getElementById("-");
var mul = document.getElementById("*");
var div = document.getElementById("/");
var pow = document.getElementById("^");
var equal = document.getElementById("=");
var per = document.getElementById("%");
var l = document.getElementById("(");
var r = document.getElementById(")");
var punto = document.getElementById(".");
var coma = document.getElementById("direccion");
var sqrt = document.getElementById("sqrt");


one.addEventListener("click", ()=> {result.textContent = result.textContent + "1"},true);
two.addEventListener("click", ()=> {result.textContent = result.textContent + "2"},true);
three.addEventListener("click", ()=> {result.textContent = result.textContent + "3"},true);
four.addEventListener("click", ()=> {result.textContent = result.textContent + "4"},true);
five.addEventListener("click", ()=> {result.textContent = result.textContent + "5"},true);
six.addEventListener("click", ()=> {result.textContent = result.textContent + "6"},true);
seven.addEventListener("click", ()=> {result.textContent = result.textContent + "7"},true);
eight.addEventListener("click", ()=> {result.textContent = result.textContent + "8"},true);
nith.addEventListener("click", ()=> {result.textContent = result.textContent + "9"},true);
zero.addEventListener("click", ()=> {result.textContent = result.textContent + "0"},true);
reset.addEventListener("click", ()=> {result.textContent = ""} ,true);
del.addEventListener("click" , ()=> {d()});
sum.addEventListener("click" , ()=> {result.textContent = result.textContent + "+"},true);
sub.addEventListener("click" , ()=> {result.textContent = result.textContent + "-"},true);
mul.addEventListener("click" , ()=> {result.textContent = result.textContent + "*"},true);
div.addEventListener("click" , ()=> {result.textContent = result.textContent + "/"},true);
pow.addEventListener("click" , ()=> {result.textContent = result.textContent + "Math.pow("});
equal.addEventListener("dblclick" , ()=> {resultado()});
per.addEventListener("click" , ()=> {result.textContent = result.textContent + "*0.0"});
l.addEventListener("click" , ()=> {result.textContent = result.textContent + "("},true);
r.addEventListener("click" , ()=> {result.textContent = result.textContent + ")"},true);
sqrt.addEventListener("click" , ()=> [result.textContent = result.textContent + "Math.sqrt("])
//punto.addEventListener("click" , ()=>{result.textContent = result.textContent + "."},true);
//coma.addEventListener("click" , ()=>{result.textContent = result.textContent + " ,"},true);
//console.log(eval("Math.pow(4,4)"));

function d(string){
string = result.textContent = result.textContent.toString().slice(0,-1);
string.substring(0 , string.length-1);
return string;
}

function resultado(){
try{
result.textContent= (eval(result.textContent));
} catch(error){
    result.textContent=' SYNTAX ERROR '
}}

function porcentaje(){

    try {
        
        let x = result.value.split('%')
        
         result.textContent = eval(eval(x[0])*x[1]/100);

    } catch (error) {
        result.textContent=' SYNTAX ERROR '
    }
}


document.addEventListener("keydown" , function tecla(key){
console.log(key.keyCode);
    switch(key.keyCode){
        case 48:
            {
                result.textContent = result.textContent + "0";
            }
            break;
        case 49:
            result.textContent = result.textContent + "1";
            break;
        case 50:
            result.textContent = result.textContent + "2";
            break;
        case 51:
            result.textContent = result.textContent + "3";
            break;
        case 52:
            result.textContent = result.textContent + "4";
            break;
        case 53:
            result.textContent = result.textContent + "5";
            break;
        case 54:
            result.textContent = result.textContent + "6";
            break;
        case 55:
            result.textContent = result.textContent + "7";
            break;
        case 56:
            result.textContent = result.textContent + "8";
            break;
        case 57:
            result.textContent = result.textContent + "9";
            break;
        case 190:
        result.textContent = result.textContent + ".";
            break;
        case 188:
            result.textContent = result.textContent + ",";
            break;
        case 187:
            result.textContent = result.textContent + "+";
            break;
        case 189:
            result.textContent = result.textContent + "-";
            break;
        case 191:
            result.textContent = result.textContent + "/";
            break;
        case 53:
            result.textContent = result.textContent + "%";
            break;
        case 8:
            d();
            break;
        case 13:
            resultado();
            break;
        case 69:
            result.textContent = result.textContent + "%";
            break;
    
            


    }

    

   

});

//<button class="boton ab" onclick="izdr()" id="direccion"><></button>   










function izdr(x, y , z){
    x= document.getElementById("direccion");
    x.innerHTML=`
    <div class = "pr">
    <div class = "btn">
    <button class = "boto iz" id = "izq"> < </button>
    <button class = "boto dr" id = "der"> > </button>
    </div>
    </div>
    `;
    
y = document.getElementById("izq");
y.addEventListener("click" , () => {result.textContent = result.textContent + "<"}, true);

z = document.getElementById("der");
z.addEventListener("click" , () => {result.textContent = result.textContent + ">"}, true);

function p(){
    alert("funciona");
    
}
return p;
}

function period(a , b , c){
    a = document.getElementById(".");
    a.innerHTML=`
    <div class = "pr">
    <div class = "btn">
    <button class = "boto iz" id = "coma"> , </button>
    <button class = "boto dr" id = "punto"> . </button>
    </div>
    </div>
    `;
    b = document.getElementById("coma");
    b.addEventListener("click" , () => {result.textContent = result.textContent + ","},true);
    
    c = document.getElementById("punto");
    c.addEventListener("click" , ()=> {result.textContent = result.textContent + "."},true);
    
}