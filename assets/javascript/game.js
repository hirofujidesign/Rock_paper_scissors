//link to firebase
var game = new Firebase("https://rockpaperscissorgame.firebaseio.com");
var connectedPlayers = game.child("players");
var player1 = game.child("player1");
var player2 = game.child("player2");
var NUM_PLAYERS = 2;

var playersLocation = 'playerList';

var playersData = 'playerData';
var myPlayerNumber, alreadyInGame = false;

//playerOne Submit
$(".playerSubmit").on("click",function(){

  //grabs Name, create wins,losses,ties
  var plaName = $("#playerNameInput").val().trim();
  var plaWins = 0;
  var plaLosses = 0;
  var plaTies = 0;

  // creates local temp obj
  var newPla = {
    name: plaName,
    wins: plaWins,
    losses: plaLosses,
    ties: plaTies
  }


  myPlayerNumber = null;


  //upload to firebase
  connectedPlayers.push(newPla);
  console.log(newPla.name);
  console.log(newPla.wins);
  console.log(newPla.losses);
  console.log(newPla.ties);

  //alert
  alert("Player has Joined");

  //clear
  $("#playerNameInput").val("");




  return false;
});




