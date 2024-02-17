var id = null;

function CloseElement(){
    var element = document.getElementById("bigimage");
    if (element.style.visibility != "hidden"){
        element.style.opacity = 1
        
        clearInterval(id);
        var opacity = 1
        id = setInterval(frame, 5);
        function frame() {
            if (opacity < 0) {
                element.style.visibility = "hidden"
                element.style.opacity = 0
                clearInterval(id);
          } else {
            opacity -= 0.1;
            element.style.opacity = opacity
          }
        }
    }
}

function OpenElement(ID){
    var element = document.getElementById("bigimage");
    if (element.style.visibility != "visible"){
        element.style.visibility = "visible"
        document.getElementById("bigimg").src=document.getElementById(ID).src
        element.style.opacity = 0

        clearInterval(id);
        var opacity = 0
        id = setInterval(frame, 5);
        function frame() {
          if (opacity > 1) {
            clearInterval(id);
            element.style.opacity = 1
          } else {
            opacity += 0.1;
            element.style.opacity = opacity
          }
        }
    }
}

        
