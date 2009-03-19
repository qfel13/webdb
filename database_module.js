// database module
function initializeDatabase() {
	console.debug("initializeDatabase");
	db = google.gears.factory.create('beta.database');
	try {
		db.open('webdb.database');
	} catch (exception) {
		console.debug("exception = ", exception.message);
		return;
	}
	success = checkSchemaVersion();
	return success;
}

function checkSchemaVersion() {
	var schemaVersion = -1
	try {
		var rs = db.execute(SqlQueries.selectQueries.selectSchemaVersion);
		if (rs.isValidRow()) {
			schemaVersion = Number(rs.field(0));
			console.debug("version=", schemaVersion);
			if (isNaN(schemaVersion)) {
				schemaVersion = -1;
			}
		}
	} catch (exception) {
		console.debug("exception=", exception.message);
	}
	console.debug("version=", schemaVersion);
	var schemaVersionElement = document.getElementById("database_schemaVersion");
	schemaVersionElement.innerHTML = "schemaVersion:" + schemaVersion;
	var requiredVersionElement = document.getElementById("database_requiredVersion");
	requiredVersionElement.innerHTML = "requiredVersion:" + SqlQueries.requiredVersion;
	var success = false;
	if (SqlQueries.requiredVersion != schemaVersion) {
		success = updateDatabaseSchema();
	} else {
		console.debug("requiredVersion == schemaVersion", SqlQueries.requiredVersion, schemaVersion);
		success = true;
	}
	console.debug("success", success);
	var successElement = document.getElementById("database_success");
	successElement.innerHTML = "success: " + success;

	// TODO: remove
	var ldp = new LocalDataProvider();
	alert(ldp.getTableList());

	return success;
}

function updateDatabaseSchema() {
	var success = false;
	for (var i in SqlQueries.dropQueries) {
		console.debug(i);
		var query = SqlQueries.dropQueries[i];
		db.execute(query);
	}
	for (var i in SqlQueries.createQueries) {
		console.debug(i);
		var query = SqlQueries.createQueries[i];
		try {
			db.execute(query);
		} catch (exception) {
			console.debug(i, "create failed");
			return success;
		}
	}
	db.execute(SqlQueries.insertQueries.insertSchemaVersion, [SqlQueries.requiredVersion]);
	success = true;
	return success;
}
//TODO: function synchronizeDatabases

// constructor
function Data() {
	this.tableList = ["A", "B"];
}

Data.prototype.getTableList = function(){
	return this.tableList;
}