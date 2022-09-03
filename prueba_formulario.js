class form extends HTMLInputElement{
    constructor(){
        super();
    }

    set_usuario(x){
    var x = usuario;
    x = document.querySelector("#x1");
    x.value=this.usuario;
    console.log("se ha seteado el usuario");
    }


    usuario(z){
    var z = this.usuario;    
    var x =document.querySelector("#x");
    if (x.value == z){
        alert("usuario correcto") ;
    }
    else{
        alert("usuario incorrecto");
    }
    
}
}
window.customElements.define ("x-form",form,{extends : 'input'})
