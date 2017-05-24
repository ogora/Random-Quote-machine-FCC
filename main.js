$(document).ready(function() {

  var verse;
  var book;
  

  function getrandom() {
    $.ajax({
      url: 'http://labs.bible.org/api/?',
           },
      success: function(response) {
        verse = response.quoteText;
        $('#verse').text(response.quoteText);
        $('#book').text(response.quoteText);
        
      }
    });
  }

  getrandom();

  $('.get-verse').on('click', function(event) {
    event.preventDefault();
    getrandom();
  });
