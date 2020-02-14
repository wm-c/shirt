function getText(){
    var text = document.getElementById("textbox").value;
    document.getElementById("textbox").value = "";

    if(text != ""){
       return text;
    }

    return False;    
}

