const SQLDB = require('./db-sqlite');
const SQLDBAdapterFactory = require('./webSQL-adapter');
module.exports = SQLDBAdapterFactory(SQLDB);
