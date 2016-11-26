var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OAuthRefreshTokenSchema = new Schema({
	refresh_token: {type:String, required:true, unique:true},
	expires: Date,
	scope: String,
	User: {type:Schema.Types.ObjectId, ref:'User'},
	OAuthClient: {type:Schema.Types.ObjectId, ref:'OAuthClient'},
});

module.exports = mongoose.model('OAuthRefreshtoken', OAuthRefreshTokenSchema);
