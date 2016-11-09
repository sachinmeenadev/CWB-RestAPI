var users = {
	getAll: function(req, res){
		var alluser = data;
		res.json(allusers);
	},
	getOne: function(req, res){
		var id = req.params.id;
		var user = data[0];
		res.json(user);
	},
	create: function(req, res){
		var newUser = req.body;
		data.push(newuser);
		res.json(newuser);
	},
	update: function(req, res){
		var updateUser = req.body;
		var id = req.params.id;
		data[id] = updateuser;
		res.json(updateuser);
	},
	delete: function(req, res){
		var id = req.params.id;
		data.splice(id, 1);
		res.json(true);
	}
};

var data = [{
	name: 'User 1',
	id: '1'
},{
	name: 'User 2',
	id: '2'
},{
	name: 'User 3',
	id: '3'
}];

module.exports = users;