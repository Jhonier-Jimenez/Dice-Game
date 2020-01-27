function play(){

  var number1 = Math.floor((Math.random()*6)+1);
  var value = "images/dice"+number1+".png";
  document.querySelector(".img1").setAttribute("src", value);

  var number2 = Math.floor((Math.random()*6)+1);
  var value = "images/dice"+number2+".png";
  document.querySelector(".img2").setAttribute("src", value);

  if(number1 > number2){
    document.querySelector("h1").textContent = "Player 1 Wins! 🚩";
  }
  else if(number1 < number2){
    document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
  }
  else{
    document.querySelector("h1").textContent = "Draw!";
  }
}

play();
