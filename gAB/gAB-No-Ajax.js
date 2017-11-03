var gAB = {
  newData: function(dS, newData, aT) {
    $.ajax({
    url: 'https://api.github.com/gists/' + gABGist,
    type: 'PATCH',
    beforeSend: function(xhr) {
        xhr.setRequestHeader("Authorization", "token " + aT);
    },
    data: '{"description": "Gist as Backend Update","public": false,"files": {"' + dS + '": {"content": "' + newData + '"}}}'
}).done(function(response) {
    console.log(response);
});
  },
  readData: function(dS, gABGist) {
    $.ajax({
      url: 'https://api.github.com/gists/' + gABGist,
      type: 'GET',
      dataType: 'jsonp'
    }).success(function(gistdata) {
      var content = gistdata.data.files[dS].content;
      return JSON.parse(content);
    }).error(function(e) {
      console.log(e);
    });
  }
};
