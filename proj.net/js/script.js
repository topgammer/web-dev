menu.onclick = function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += "  responsive";
  } else {
    x.className = "topnav";
  }
}

function init(){ // read goods and call fun goods
  $.getJSON("goods.json", goodsOut) // 1 must get name 
}

function goodsOut(data){ // get all json file in var data
var goods = JSON.parse(data); // and vivod na str
console.log(data);
}

init();