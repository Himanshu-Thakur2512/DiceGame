
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

var a= document.querySelector("img");
a.setAttribute("src", randomImageSource);

var randomImageNumber2= Math.floor( Math.random() * 6) + 1;
var randomDiceImage2= "dice"+ randomImageNumber2+ ".png";
var randomImageSource2= "images/"+randomDiceImage2;
var b= document.querySelectorAll("img")[1];
b.setAttribute("src", randomImageSource2);


if(randomNumber1 > randomImageNumber2)
{
    document.querySelector("h1").innerHTML="Player 1 wins!!";
}
else if(randomNumber1 < randomImageNumber2)
{
    document.querySelector("h1").innerHTML="Player 2 wins!!";
}

else{
    document.querySelector("h1").innerHTML="Try Again!";
}