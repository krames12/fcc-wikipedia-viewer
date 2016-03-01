var wikiData = {};
var searchInfo = "physics";
var results = $(".results-container");

$.ajax({
  url: 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=' + searchInfo + '&limit=10&namespace=0&callback=?',
  type: 'GET',
  dataType: 'json',
  headers: {'https://github.com/krames12/fcc-wikipedia-viewer': 'krames12@gmail.com'},
  success: function(data){
    wikiData = data;
    console.log(wikiData);
  },
  error: function(xhr, txtStatus){
    console.log("Request Failed with a status of " + xhr.status)
  },
});
