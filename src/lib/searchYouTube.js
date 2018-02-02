var searchYouTube = (options, callback) => {
  console.log('options', options);
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      key: options.key,
      q: options.query,
      maxResults: options.max,
      part: 'snippet'
    },
    contentType: 'application/json',
    maxResults: 5,
    success: function(data) {
      console.log(data);
      callback(data.items);
    },
    error: function(data) {
      console.error(`failed to get:`, data)
    }
  })
};

window.searchYouTube = searchYouTube;
