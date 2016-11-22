// Load required packages
var mongoose = require('mongoose');
require('mongoose-double')(mongoose);

var SchemaTypes = mongoose.Schema.Types;

// Define our application schema
var AppSchema = new mongoose.Schema({
	title: {type:String, trim:true},
	description: {type:String},
	meta: {
		emails: {
			send: {type:Number, default:0},
			credit: {type:Number, default:10}
		}
	},
	appSecretKey: {type:String},
	appClientId: {type:String},
	ownerId: {type:SchemaTypes.ObjectId, ref:'User'},
	version: {type:Number, default:1},
	created_at: Date,
	updated_at: Date
});

AppSchema.pre('save', function(next){
	// get the current date
	var currentDate = new Date();

	// change the update_at field to current date
	this.updated_at = currentDate;

	// if created_at doesn't exist, add to that field
	if(!this.created_at) this.created_at = currentDate;

	next();
});

// Export the model
module.exports = mongoose.model('App', AppSchema);
