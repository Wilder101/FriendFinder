// FriendFinder by WBM, 1/18/19, apiRoutes.js file

// Your apiRoutes.js file should contain two routes:
// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

var path = require("path");  

var friends = require("../data/friends.js");

// Export API routes
module.exports = function(app) {

    // Get friends route
	app.get("/api/friends", function(req, res) {

		res.json(friends);
	});

    // Post friends route
	app.post("/api/friends", function(req, res) {

		var userInput  = req.body;
		var userScores = userInput.scores;

		var matchName  = "";
		var matchPhoto = "";
		var totalDifference = 60;

		// Examine existing friends in list
		for (let i = 0; i < friends.length; i++) {
	
			let difference = 0;
			for (let j = 0; j < userScores.length; j++) {

				difference = difference + Math.abs(friends[i].scores[j] - userScores[j]);
            }
      
			if (difference < totalDifference) {

				totalDifference = difference;
				matchName = friends[i].name;
				matchPhoto = friends[i].photo;
			}
		}

		// Add new user
		friends.push(userInput);

    // Send response to html
    	// console.log({status: 'OK', matchName: matchName, matchPhoto: matchPhoto});
		res.json({matchName: matchName, matchPhoto: matchPhoto});
	});
}
