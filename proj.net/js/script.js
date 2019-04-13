menu.onclick = function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += "  responsive";
  } else {
    x.className = "topnav";
  }
}


function init() {
  //вычитуем файл goods.json
  $.getJSON("goods.json", goodsOut);
}


function goodsOut(data) {
  console.log(data);
  var out='';
  for (var key in data){
  //   out +='<div class="goods-list">';
  //   out +='<div class="itemname">'+data[key].name+'</div>';
  //   out += '<img src="img/'+data[key].img+'" alt="">';
  //   out +='<div class="priseitem">'+data[key].cost+'</div>';
  //   out +='<button class="prise-btn">Buy</button>';
  //   out +='</div>';
  // }
  //===========
  // out +='<div class="goods-list">';
  // out +=`<div class="itemname">${data[key].name}</div>`;
  // out +=`<img src="img/${data[key].img}" alt="">`;
  // out +=`<div class="priseitem">${data[key].cost}</div>`;
  // out +=`<button class="prise-btn" data-id="${key}">Buy</button>`;
  // out +='</div>';
///

out +='<div class="goods-out">';
out +=`<img class="img-item" src="img/${data[key].img}" alt="1">`;
out +=`<p class="itemname">${data[key].name}</p>`;
out +=`<div class="priseitem">${data[key].cost}</div>`;
 out+='<button class="prise-btnn" data-id="${key}">Купить</button>';
 out +='</div>';
  }
  $('.goods-out').html(out);
}



$(document).ready(function() {
init();
});


