// COUNTING HOURS:MINUTES:SECONDS
function odliczanie() {
  var dzisiaj = new Date();

  var godzina = dzisiaj.getHours();
  if (godzina < 10) godzina = "0" + godzina;

  var minuta = dzisiaj.getMinutes();
  if (minuta < 10) minuta = "0" + minuta;

  var sekunda = dzisiaj.getSeconds();
  if (sekunda < 10) sekunda = "0" + sekunda;

  document.getElementById("zegar").innerHTML =
    godzina + ":" + minuta + ":" + sekunda;

  setTimeout("odliczanie()", 1000);
}

// RANDOM QUOTE
function getQuote() {
  var url = "https://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?";
  $.getJSON(url, function(data) {
    if (data.quoteAuthor === '') {
      data.quoteAuthor = 'Unknown';
    }
    var txt = data.quoteText;
    var author = data.quoteAuthor;
    $("#qunote").html(txt).hide().fadeIn(1000).delay(7800).fadeOut(1000);
    $("#author").html(author).hide().fadeIn(1000).delay(7800).fadeOut(1000);

    // $("#qunote").html(txt).hide().fadeIn().delay(1000).fadeOut();
    // $("#author").html(author).hide().fadeIn().delay(1000).fadeOut();
  });
};



// HIDDEN PARTS OF WEBPAGE
$('.square').hide();
$('.footer').hide();

// DO WHEN WEBPAGE LOADED
$(document).ready(function() {
  // ANIMATIONS
  setTimeout(function() {
    $('#square1').slideDown('slow');
    $('#square2').fadeIn('slow');
  }, 500);

  setTimeout(function() {
    $('.footer').fadeIn(2000);
  }, 1000);

  // LOAD NEW CONTENT
  $('#about').click(function() {
    $('.tile5').load("whoamI.html");
  });
  $('#offer').on('click', function() {
    swal("Sorry,", "but the 'My offer' section is not available yet", "error");
  });
  $("#edu").click(function() {
    $('.tile5').load("edu.html");
  });
  $("#contact").click(function() {
    $('.tile5').load("contact.html");
  });

  getQuote();
  setInterval("getQuote()", 10000);
});
