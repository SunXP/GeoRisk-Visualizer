sendParseRequest = (name) => {
  $.ajax({
    url: '/parse/',
    type: 'post',
    dataType: 'json',
    contentType: 'application/json',
    data: JSON.stringify({'name':name}),
    success: function (xhr) {
      console.log(xhr.mapData.geoJson);
      $("#resp").html(xhr.mapData.geoJson);
    },
    error: function(xhr) {
      console.log(xhr);
    }
  });
}
