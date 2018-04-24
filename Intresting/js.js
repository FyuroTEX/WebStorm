$(document).ready(function(){
var quote;
var autor;
  function getNewQuote(){
    $.ajax({
      url: 'http://api.forismatic.com/api/1.0/',
      jsonp: 'jsonp',
      dataType: 'jsonp',
      data: {
      method: 'getQuote',
      lang: 'ru',
      format: 'jsonp'
    },
    success: function(response){
    quote = response.quoteText;
    autor = response.quoteAuthor;
    $('#quote').text(quote);
    if (autor) {
    $('#autor').text(" -" + autor);
  } else {
    $('#autor').text('-неизвестный');
  }
    }
    });
  }
getNewQuote();
$('#getQuote').on('click', function(event){
  event.preventDefault;
  getNewQuote();
})
});






/*
$('#getQuote').on('click', function(){

    $.ajaxSetup ({cache : false});

    $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&callback=", function(data){



    $(".message").html(data[0].content + " - " + data[0].title);


});
});
*/
/*
$('#getQuote').on('click', function(e) {
    e.preventDefault();
    $.ajax( {
      url: '/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
      success: function(data) {
        var post = data.shift(); // The data is an array of posts. Grab the first one.
        $('#quote-title').text(post.title);
        $('#quote-content').html(post.content);

        // If the Source is available, use it. Otherwise hide it.
        if (typeof post.custom_meta !== 'undefined' && typeof post.custom_meta.Source !== 'undefined') {
          $('#quote-source').html('Source:' + post.custom_meta.Source);
        } else {
          $('#quote-source').text('');
        }
      },
      cache: false
    });
  });
});
*/
