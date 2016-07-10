var includePaths = [];
var bourbon		 = require('bourbon').includePaths
var bourbonNeat	 = require("bourbon-neat").includePaths

if (bourbon && bourbon.length > 0) {
	includePaths = includePaths.concat(bourbon)
}

if (bourbonNeat && bourbonNeat.length > 0) {
	includePaths = includePaths.concat(bourbonNeat)
}
module.exports = includePaths;
