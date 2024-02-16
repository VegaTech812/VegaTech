
function CloseElement(){
    var element = document.getElementById("bigimage");
    if (element.style.visibility != "hidden"){
        element.style.visibility = "hidden"
    }
}
function OpenElement(ID){
    var element = document.getElementById("bigimage");
    if (element.style.visibility != "visible"){
        element.style.visibility = "visible"
    console.log(ID)
    document.getElementById("bigimg").src=document.getElementById(ID).src
    

    }
}

        
