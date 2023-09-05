function Addition(){
    a=document.getElementById("number1").value;
    b=document.getElementById("number2").value;
    c=parseInt(a)+parseInt(b);
    document.getElementById("output").innerHTML=c;
}
function Subtraction(){
    a=document.getElementById("number1").value;
    b=document.getElementById("number2").value;
    c=a-b;
    document.getElementById("output").innerHTML=c
}
function Multiplication(){
    a=document.getElementById("number1").value;
    b=document.getElementById("number2").value;
    c=a*b;
    document.getElementById("output").innerHTML=c
}
function Division(){
    a=document.getElementById("number1").value;
    b=document.getElementById("number2").value;
    c=a/b;
    document.getElementById("output").innerHTML=c
}