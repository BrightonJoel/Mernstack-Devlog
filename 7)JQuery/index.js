alert("Jesus Rocks")

/*$(document).ready(function(){
  $("h1").css("color","red")
})*/
$('h1').addClass("big-title margin-50")
//$('h1').removeClass("big-title margin-50")
console.log($('h1').hasClass("margin-50"))

console.log($('button'))

$('h1').text("Hey!")
//$("button").text("Dont not click")
$('button').html("<em>whatever</em>")

console.log($('img').attr("src"))
$('a').attr("href", "https://www.yahoo.com")

$('h1').click(function() {
  $('h1').css("color", "purple")
})

$("button").click(function() {
  $('h1').css("color", "purple")
})

$("input").keydown(function(event) {
  $('h1').text(event.key)
})

$('h1').on("mouseover", function() {
  $('h1').css("color", "green")
})

$('h1').before("<button>before</button>")
$('h1').after("<button>after</button>")
$('h1').prepend("<button>prepend</button>")
$('h1').append("<button>append</button>")

//To Remove all the Buttons
//$('button').remove();

//animation
//hide,show,fadeout,fadeout,slidein,slideout,toggle

$('button').click(function() {
  $('h1').slideUp().slideDown().animate({opacity:0.5})
})
