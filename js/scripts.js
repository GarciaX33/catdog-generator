$(document).ready(function() {
  $("form#pet").submit(function(event) {
    var age = parseInt($("#age").val());
    var gender = $("select#gender").val();
    var activity = $("select#activities").val();
    var housing = $("select#living").val();
    var cat = "cat";
    var dog = "dog";

    if (activity) {
      //var cat = "cat";
      //var dog = "dog";
      if (activity === 'read' && housing === "apartment" ) {
      //cat;
      	$("#thepet").empty().prepend(cat);
      	$("#quote").show();
      }

      if (activity === 'run' && housing === "house") {
      //dog;
      	$("#thepet").empty().prepend(dog);
      	$("#quote").show();
      }
      //else {
      	//alert('Please fully fill out form.');

      }

    if (isNaN(age)) {
        $("#quote").hide();
  			alert('Please fully fill out form.');
  	}


    event.preventDefault();
  });
});
