//Required modules install via npm 
var Twitter = require('twitter');
var five = require("johnny-five"); 
var cron = require('node-schedule');

//Twitter authentication
var client = new Twitter({
  consumer_key: 'consumer_key:',
  consumer_secret: 'consumer_secret:',
  access_token_key: 'access_token_key',
  access_token_secret: ' access_token_secret'
});

// get the last tweet sent to your account 
var params = {screen_name: 'YOURTWITTERNAME' ,count: 1};


//Realy 
var relay; 



//Twiiter
	
client.get('statuses/user_timeline', params, function(error, tweets, response){

//Conver JSON to string 
var t = JSON.stringify(tweets); 

//Sub strings 
var sub_on ="lumos";
var sub_off ="knox";

 
 
//Connected to borad 
var board = new five.Board(); 


board.on("ready", function() {
  relay = new five.Relay({
  type: "NO",
  pin: 10
});

//console.log(t);


  // Control the relay in real time
  // from the REPL by typing commands, eg.
  //
  // relay.on();
  //
  // relay.off();
  //
  // OR...
  //
  // relay.open();
  //
  // relay.close();
  //
  this.repl.inject({
	
    relay: relay
    
	});
  
//Switch Realy OFF

	if (t.indexOf(sub_off)> -1) {
			relay.off();
	}
  
	
//Switch Realy ON	
	if (t.indexOf(sub_on)> -1) {
			relay.on();

	}

 
  
  
  
	});

});





