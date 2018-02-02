var searchYouTube = (options, callback) => {
  console.log('options', options);
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: {
      key: options.key,
      q: options.query,
      maxResults: options.max,
      type: 'GET'

    },
    contentType: 'application/json',
    maxResults: 5,
    success: function(data) {
      console.log(JSON.stringify(data));
      callback(data);
    },
    error: function(data) {
      console.error(`failed to get: ${data}`)
    }
  })
};

window.searchYouTube = searchYouTube;
