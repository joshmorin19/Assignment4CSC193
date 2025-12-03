const button1 = document.getElementsById("Bigger");
const button2 = document.getElementsById("Smaller");
const button3 = document.getElementById("Moo");
const radio1 = document.getElementById("Fancy");
const radio2 = document.getElementById("Boring");

function Bigger(){
    const element = document.getElementById("textField");

    if(element){
        element.style.fontSize = "24px";
    }
}

function Smaller(){
    const element = document.getElementById("textField");

    if(element){
        element.style.fontSize = "12px";
    }
}

function Moo(){
    const element = document.getElementById("textField");

    if(element){
        var currentText = element.value;
        var parts = currentText.split(".");
        var text = parts.join("-Moo.");
        
        element.value = text;
    }
}

function Fancy(){
    const element = document.getElementById("textField");

    if(element){
        element.style.fontWeight = "bold";
        element.style.textDecoration = "underline";
        element.style.color = "blue";
    }
    document.getElementById("Boring").checked = false;
}

function Boring(){
    const element = document.getElementById("textField");

    if(element){
        element.style.fontWeight = "normal";
        element.style.textDecoration = "none";
        element.style.color = "black";
    }
    document.getElementById("Fancy").checked = false;
}

button1.addEventListener('click', Bigger);
button2.addEventListener('click', Smaller);
button3.addEventListener('click', Moo);
radio1.addEventListener('change', Fancy);
radio2.addEventListener('change', Boring);