function odliczanie()
	{
		var dzisiaj = new Date();

		var godzina = dzisiaj.getHours();
		if (godzina<10) godzina = "0"+godzina;

		var minuta = dzisiaj.getMinutes();
		if (minuta<10) minuta = "0"+minuta;

		var sekunda = dzisiaj.getSeconds();
		if (sekunda<10) sekunda = "0"+sekunda;

		document.getElementById("zegar").innerHTML =
		godzina+":"+minuta+":"+sekunda;

		 setTimeout("odliczanie()",1000);
	}

	$('.square').hide();
	$('.footer').hide();

	$(document).ready(function(){

		setTimeout(function(){
			$('#square1').slideDown('slow');
			$('#square2').fadeIn('slow');
		},500);

		setTimeout(function(){
			$('.footer').fadeIn(2000);
		},1000);

		$('#about').on('click', function(){
			$('.tile5').html("test1");
		});
		$('#offer').on('click', function(){
			$('.tile5').html("test2");
		});



		//When button is clicked then get quote from API link
 $('#b').on('click', function(){
	 var url = "https://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?";

	 var getQuote = function(data) {
		 $("#qunote").text(data.quoteText);

		 if (data.quoteAuthor === '') {
			 data.quoteAuthor = 'Unknown';
		 }
		 $("#author").text('- ' + data.quoteAuthor);


	 // When Twitter button is clicked then twit this quote
		 $('#twitter').on('click', function(){
			 $("#tweet-quote").attr(
					 "href",
					 "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" +
					 encodeURIComponent('"' + data.quoteText + '" ' + data.quoteAuthor)
			 );
				 });
};

	 $(document).ready(function() {
		 $.getJSON(url, getQuote, 'jsonp');
	 });

	 $("#quote").click(function() {
		 $.getJSON(url, getQuote, 'jsonp');
	 });
 });





	});
