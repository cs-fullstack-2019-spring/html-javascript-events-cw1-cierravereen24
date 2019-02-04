
// # HTML frontend JavaScript events CW

console.log("hghug");
var idx =0;
var myText = "Cierra Vereen is a queen amongst a world full of peasants. Her every action is grace and elegance personified. The beauty that the Queen Cierra possesses can not be put into word. Most would imagine that a queen of such caliber would be full of themselves but not Queen Cierra. She is the most humble, caring, and just queen that has sat on the throne.";
var btn = document.querySelector('button');
var text = document.getElementById("typer");

text.onkeypress = function(e)
{
    text.value += myText[idx];
    idx++;
    e.preventDefault();
};

btn.onclick = function(e)
{
    console.log("Clicked");
    idx = 0;
    text.value = "";
};



