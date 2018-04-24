$(document).ready(function() {
  var quote;
  var autor;

  function getNewQuote() {
    $.ajax({
      url: 'http://api.forismatic.com/api/1.0/',
      jsonp: 'jsonp',
      dataType: 'jsonp',
      data: {
        method: 'getQuote',
        lang: 'ru',
        format: 'jsonp'
      },
      success: function(response) {
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

  $('#getQuote').on('click', function(event) {
    event.preventDefault;
    getNewQuote();
  })
});
