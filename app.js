"use strict";
$('get-api').on('submit', function(e){
  var listAllData = $.ajax({
    method: 'GET',
    url: /http://jsonplaceholder.typicode.com/users,
    headers:{
      },
      dataType: 'json'
  });

  listAllData.done(function(remoteData, error){
    var dataTemplate = Handlebars.compile($('#dataTemplate').html());
    var newHTML = dataTemplate({names: data});
  });

  listAllData.fail(function(){
    console.log("the call to get data has failed");
  });
});
