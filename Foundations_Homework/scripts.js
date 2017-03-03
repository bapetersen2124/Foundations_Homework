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

$(".hover").hover(function() {
  $(".hover").text("ADD TO CART!");
}, function(){
  $(".hover").text("BUY NOW!");
});

var cart_total_items = 0;
$(".hover").click(function() {
  $(".hover").removeClass("hover").text("ADDED TO CART!");
  cart_total_items += 1;
  $(".cart-total-items").text(
    "Shopping Cart (" + cart_total_items + ")"
)}
);


$(".mid-page-nav-bar").hover(function() {
  $(this).addClass("thick-underline");
}, function () {
  $(this).removeClass("thick-underline");
});

$(".mouse-over").hover(function() {
  $(this).addClass("thick-underline");
}, function () {
  $(this).removeClass("thick-underline");
});
