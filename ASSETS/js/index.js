var $products = $("#searchable .row");
$("#searchInput").keyup(function() {
  var re = new RegExp($(this).val(), "i");
  $products
    .removeClass("hidden")
    .filter(function() {
      return !re.test($(this).text());
    })
    .addClass("hidden");
});
$(".link").attr("onClick", "this.setSelectionRange(0, this.value.length)");

function cssOrJsFun() {
  var cssOrJs = $('#formatView').find(":selected").text();
  console.log(cssOrJs);
  if (cssOrJs == "JS") {
    window.location.href = "/CDNJS"
  } else {
    window.location.href = "/"
  }
}

var fullUrl = window.location.href;
var qUrl = fullUrl.substr(fullUrl.indexOf("?") + 1);
if (qUrl === "skeleton") {
  window.location = "https://cdn.clarkhacks.com/skeleton/2.0.4/css/skeleton.css"
};
