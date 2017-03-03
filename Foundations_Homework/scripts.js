// var listItems = $("li");
// console.log(listItems);
// // targeting all list items in HTML
//
// var myH1Selection = $(".span");
// console.log(myH1Selection);
//
// $("ul").addClass("main-content");
//
// // targeting unordered lists, adding class "main content"
//
// var sectionSelection = $("section");
// sectionSelection.text("this is new content!")
// // text is a something you can call, will change text that exists in that target
//
// $("body").append("<div> This is a new div that wasn't here before! </div>")
// // append will add to the page any content that you pass to it in parentheses; defaults to bottom of page

$("#buy-now-button").hover(function() {
  $("#buy-now-button").text("ADD TO CART!");
}, function(){
  $("#buy-now-button").text("BUY NOW!");
});

$("#buy-now-button").click(function() {
  $("#buy-now-button").text("ADDED TO CART!");
});

$(".shopping-cart").hover(function() {
  $(".shopping-cart").addClass("thick-underline");
}, function (){
  $(".shopping-cart").removeClass("thick-underline");
});

$(".mid-page-nav-bar").hover(function() {
  $(this).addClass("thick-underline");
}, function () {
  $(this).removeClass("thick-underline");
});
