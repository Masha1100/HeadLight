let dev           = require('./gulp/devTask/dev');
let build           = require('./gulp/buildTask/build');

exports.build     = build;
exports.dev       = dev;
exports.default   = dev;