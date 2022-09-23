function a(){
    var obj = document.getElementById("container");
    obj.style["color"] = "red";
    }

    function b(){
    var obj = document.getElementById("container");
    obj.style["color"] = "black";
    }

    function d(){
        var blue = document.getElementById("i3"); 
        var red = document.getElementById("i1");
        var green = document.getElementById("i2");
        var rgb ="rgb("+Number(red.value)+","+Number(green.value)+","+Number(blue.value)+")"
        function c(){
        var obj = document.getElementById("color");
        obj.style["background-color"] = rgb;
        }
        return c;
    }

    function e(){
        d();
        var obj = document.getElementById("container");
        obj.style["color"] = rgb;
    }

    function f(){
        d();
        var obj = document.getElementById("prueba");
        obj.style["background-color"] = rgb;
    }

    function g(){
        var obj = document.getElementById("prueba");
        obj.style["background-color"] = "white";
    }

    function random(){
        var obj = document.getElementById("container");
        rgb ="rgb("+Math.random()*255+","+Math.random()*255+","+Math.random()*255+")"
        return rgb;
    }

    function r(){
        random();
        var obj = document.getElementById("container");
        obj.style["color"] = rgb;
    }