var Search = (props) => (
  <div className="search-bar form-inline">
    <input className="form-control" type="text" />
    <button onClick={function(){
      searchYouTube({key: YOUTUBE_API_KEY, query: $('.form-control').val(), max: 5}, props.method)
    }} className="btn hidden-sm-down">
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div>
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
