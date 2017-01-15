var path = require('path');

module.exports = function(app) {

//routes to homepage
app.get("/home", function(req, res){
    res.sendFile(path.join(__dirname + "/../../public/home.html"));
})

//route to survey
app.get("/survey", function(req, res){
    res.sendFile(path.join(__dirname + '/../../public/survey.html'));
})

//default to home
app.use(function (req, res) {
	res.sendFile(path.join(__dirname + '/../../public/home.html'));
	});

};