console.log("Hello!! Welcome back");
var Twit = require('twit');
var Config = require('./config');
var T = new Twit(Config);
var SearchName='IvankaTrump'
var query_PArameter= 'from:'+ SearchName;

T.get('search/tweets', { q:query_PArameter, count: 2 }, 
	function(err, data, response) {
		var tweets= data.statuses;
		for(var i=0;i<tweets.length;i++){
			console.log(tweets[i].text);			
		}
})

// var params = {screen_name: '', include_rts:true,count: 10};
// T.get('statuses/user_timeline', params, 
// 	function(error, tweets, response) {
// 		for(var i=0;i<tweets.length;i++){
// 			console.log(tweets[i].text);
// 		}

//   if (error) {
//     // console.log(JSON.stringify(tweets));
//     // var tweet_Responses=JSON.stringify(tweets);
//     // var a= tweet_Responses[0].id;
//     console.log("error occureds");
// }
// });

// var Stream = T.stream('user');

// Stream.on('follow',followed);

// function followed(event){
// 	console.log("someone followed")
// 	var name= event.source.name;
// 	var screenName= event.source.screen_name;
// 	tweetIt('@' + screenName + ' thanks for following')
// }

// // setInterval(tweetIt,1000*600);
// function tweetIt(text){
// 	var tweet = { status: text }
// 	T.post('statuses/update', tweet, function(err, data, response) {
//   		if(err){console.log("Something happened!!come back later");
//   				}
//   		else{
//   				console.log("Success");
//   			}
//   		});


// }
// var Receiver_name='JioCare'
// var My_Text_Message= 'Tell me what is the validity for 309 plan';
// T.post('direct_messages/new',{screen_name:Receiver_name,text:My_Text_Message}, function(err, data, response) {
//   		if(err){console.log("Something happened!!come back later");
//   				}
//   		else{
//   				console.log("Success");
//   			}
//   		});
