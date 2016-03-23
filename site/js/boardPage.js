/*
  Written by Kyle Arch.
*/

var socket;

function init(){

  socket = io();
  registerSocketListeners();

  var gameCanvas = document.getElementById("gameCanvas");
  var stage = new createjs.Stage(gameCanvas);
}

function registerSocketListeners(){

  socket.on('board init', onBoardInit);

}

function onBoardInit(board){

  console.log('Board received! w: ' + board.w + " h: " + board.h);

}
