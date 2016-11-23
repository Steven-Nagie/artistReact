import jsonp from 'jsonp';


// this would need some reconfiguring to work in Select, and I don't know how I would do that without returning this as a promise. 
var helpers = {
  getHeroes() {
    return jsonp('https://api.musixmatch.com/ws/1.1/chart.artists.get?page=1&page_size=50&country=US&apikey=7ead25d4f072f70cc89e665e62afb765&format=jsonp&callback=JSON_CALLBACK', null, function(err, data) {
      if (err) {
        console.error(err.message);
      } else {
        this.setState({
          artists: data.message.body.artist_list
        })
        console.log(this.state);
      }
    });
  }
}

module.exports = helpers;
