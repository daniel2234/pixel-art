function makeGrid(x,y){
  for (var rows = 0; rows < x; rows++){
    for (var columns = 0; columns < y; columns++){
     $(".container").append("<div class= 'grid'><div")
    }
  }

  $('.grid').width(960/x);
  $('.grid').height(960/x);
}

function clearGrid () {
  $('.grid').remove();
}

function refreshGrid(){
  var heightInput = $('#grid-height').val();
  var widthInput = $('#grid-width').val();
  clearGrid();
  makeGrid(widthInput, heightInput);
}


$(document).ready(function(){
  makeGrid(16,16);

  $(".grid").mouseover(function(){
    $(this).css("background-color", "black");
  })

  $(".new-grid").click(function(){
    refreshGrid();
    $(".grid").mouseover(function(){
      var favColor = $('#favcolor').val();
      $(this).css("background-color", favColor);
    })
  })

});