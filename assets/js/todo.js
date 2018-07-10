// check off specfic to-do by clicking
$("ul").on("click", "li", function(){
  // if this li is already gray
  if($(this).css("color") === "rgb(128, 128, 128)") {
    // change it back to black after this click
    $(this).css({
      color: "black",
      textDecoration: "none"
    });
  } else { // else, change it gray with line-through
    $(this).css({
      color: "gray",
      textDecoration: "line-through"
    });
  }
});
// an easier way to approach this is to set up a class in the .css file
// then use $(this).toggleClass(className); to activate or deactivate it

// click on X to remove the task
$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
  event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
  if(event.which === 13) {
    // get the text
    var todoText = $(this).val();
    //remove the tex from the input field
    $(this).val("");
    // create a new li
    $("ul").append("<li><span><i class='fas fa-trash'></i></span> " + todoText + "</li>");
  }
});

// for the plus sign
$("#toggle-form").click(function(){
	$("input[type='text']").fadeToggle();
});
