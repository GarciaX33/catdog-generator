$(document).ready(function() {
  $("form#triangle").submit(function(event) {
  	//alert('this is not a test');
    var side1 = parseInt($("#side1").val());
    var side2 = parseInt($("#side2").val());
    var side3 = parseInt($("#side3").val());
    var equilateral = "equilateral";
    var isosceles = "isosceles";
    var scalene = "scalene";
    var nottriangle = "not a triangle";

    if (side1 === side2 && side2 === side3) {
      $("#thetri").empty().prepend(equilateral);
      $("#quote").show();
    }  else if(side1 === side2 || side1 === side3 || side2 === side3) {
      $("#thetri").empty().prepend(isosceles);
      $("#quote").show();
    }  else if(side1 !== side2 && side1 !== side3 && side2 !== side3) {
      $("#thetri").empty().prepend(scalene);
      $("#quote").show();
    } else {
      $("#thetri").empty().prepend(nottriangle);
      $("#quote").show();
    }


    event.preventDefault();
  });
});
