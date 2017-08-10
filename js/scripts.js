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

    if (equilateral) {
      if (side1 === side2 && side1 === side3 && side2 === side3) {
      $("#thetri").empty().prepend(equilateral);
      $("#quote").show();
     	}
     }

     if (isosceles) {
       if (side1 === side2 || side1 === side3 || side2 === side3) {
       $("#thetri").empty().prepend(isosceles);
       $("#quote").show();
      	}
      }

      if (scalene) {
        if (side1 !== side2 && side1 !== side3 && side2 !== side3) {
        $("#thetri").empty().prepend(scalene);
        $("#quote").show();
       	}
       }



    event.preventDefault();
  });
});
