var wikiData = {};
var searchInfo = "";
var results = $(".results-container");

function getAjax(){

  searchInfo = $('.search-field').val();
  results.html('');

  $.ajax({
    url: 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=' + searchInfo + '&limit=10&namespace=0&callback=?',
    type: 'GET',
    dataType: 'json',
    headers: {'https://github.com/krames12/fcc-wikipedia-viewer': 'krames12@gmail.com'},
    success: function(data){
			console.log(data);
    // Loops through each title given in the array and stops after the last title property.
     for (var i = 0; i < data[1].length; i++){
       //Grabs results and creates a new div for each.
        results.append('<a href="' + data[3][i] + //article link
        '" target="_blank"><div class="result"><p>' +
        data[1][i] + '</p><p>' + //article title
        data[2][i] + '</div></a>'); //article description
       }
     },
     error: function(xhr, txtStatus){
       console.log("Request Failed with a status of " + xhr.status)
      },
  });
    $('.search-container').addClass('search-used');
}
