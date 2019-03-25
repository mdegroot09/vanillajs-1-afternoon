let currentPlayer = [];

function play(id){
  let playerSpan = document.getElementById("player")
  let clickedId = document.getElementById(id)
  currentPlayer.push(playerSpan.innerText)
  clickedId.innerText = playerSpan.innerText;
  if(playerSpan.innerText === "X"){
    playerSpan.innerText = "O"
  } else {
    playerSpan.innerText = "X"
  }
  checkForWinner(playerSpan, clickedId, id)
}

function checkForWinner(playerSpan, clickedId, id){
  let player = "";
  id *= 1
  if(playerSpan.innerText === "X"){
    player = "O"
  } else {
    player = "X"
  }
  let winnerTrue = false;
  if (id === 0){
    if(threeInARow(0,1,2) || threeInARow(0,3,6) || threeInARow(0,4,8)){
      winnerTrue = winner(player);
    }
  } else if (id === 1){
    if(threeInARow(0,1,2) || threeInARow(1,4,7)){
      winnerTrue = winner(player);
    }
  } else if (id === 2){
    if(threeInARow(0,1,2) || threeInARow(2,5,8) || threeInARow(2,4,6)){
      winnerTrue = winner(player);
    }
  } else if (id === 3){
    if(threeInARow(3,4,5) || threeInARow(0,3,6)){
      winnerTrue = winner(player);
    }
  } else if (id === 4){
    if(threeInARow(3,4,5) || threeInARow(1,4,7) || threeInARow(0,4,8) || threeInARow(2,4,6)){
      winnerTrue = winner(player);
    }
  } else if (id === 5){
    if(threeInARow(3,4,5) || threeInARow(2,5,8)){
      winnerTrue = winner(player);
    }
  } else if (id === 6){
    if(threeInARow(6,7,8) || threeInARow(0,3,6) || threeInARow(2,4,6)){
      winnerTrue = winner(player);
    }
  } else if (id === 7){
    if(threeInARow(6,7,8) || threeInARow(1,4,7)){
      winnerTrue = winner(player);
    }
  } else if (id === 8){
    if(threeInARow(6,7,8) || threeInARow(2,5,8) || threeInARow(0,4,8)){
      winnerTrue = winner(player);
    }
  }
  
  // Check for a Cats Game
  if (
    document.getElementById(0).innerText &&
    document.getElementById(1).innerText &&
    document.getElementById(2).innerText &&
    document.getElementById(3).innerText &&
    document.getElementById(4).innerText &&
    document.getElementById(5).innerText &&
    document.getElementById(6).innerText &&
    document.getElementById(7).innerText &&
    document.getElementById(8).innerText && 
    winnerTrue === false
  ) {
    let winnerAlert = document.getElementById("winner")
    winnerAlert.innerText = "Cat's Game!"
    let CatsGame = true;
  }
}

function threeInARow(id, id2, id3){
  let box1 = document.getElementById(id)
  let box2 = document.getElementById(id2)
  let box3 = document.getElementById(id3)
  console.log(box1.innerText)
  if(box1.innerText === box2.innerText && box2.innerText === box3.innerText){
    console.log("true")
    return true
  } else {
    console.log("false")
    return false
  }
}

function winner(player) {
  let winnerAlert = document.getElementById("winner")
  winnerAlert.innerText = player + " is the winner!"
  return true
}