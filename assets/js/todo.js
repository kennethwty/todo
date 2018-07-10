// check off specfic to-do by clicking
$("li").click(function(){
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
