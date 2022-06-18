const mongoose = require("mongoose");

const FacultySchema = new mongoose.Schema(
	{
		name: { type: String },
		email: { type: String },
		foundationDate: { type: Date },
		location: { type: String },
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Faculty", FacultySchema);
