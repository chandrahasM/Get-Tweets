// console.log("Hello!! Welcome back");
var Twit = require('twit');
var Config = require('./config');
var T = new Twit(Config);
// T.get('search/tweets', { q: '@OKGoogl17379550', count: 100 }, 
// 	function(err, data, response) {
// 		var tweets= data.statuses;
// 		for(var i=0;i<tweets.length;i++){
// 			console.log(tweets[i].text);			
// 		}
// })

var Stream = T.stream('user');

Stream.on('follow',followed);

function followed(event){
	console.log("someone followed")
	var name= event.source.name;
	var screenName= event.source.screen_name;
	tweetIt('@' + screenName + ' thanks for following')
}

// setInterval(tweetIt,1000*600);
function tweetIt(text){
	var tweet = { status: text }
	T.post('statuses/update', tweet, function(err, data, response) {
  		if(err){console.log("Something happened!!come back later");
  				}
  		else{
  				console.log("Success");
  			}
  		});


}
