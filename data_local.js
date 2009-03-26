// class LocalDataProvider called by DataProvider

function LocalDataProvider() {
	
}

LocalDataProvider.prototype.getTableList = function() {
	tableList = [];
	//console.debug(SqlQueries.selectQueries.selectTableList);
	rs = db.execute(SqlQueries.selectQueries.selectTableList);
	//console.debug(rs, rs.isValidRow());
	while (rs.isValidRow()) {
		tableList.push(rs.field(0));
		rs.next();
	}
	rs.close();
	return tableList;
}

LocalDataProvider.prototype.getTableFields = function(tablename) {
	fieldsList = [];
	console.debug(SqlQueries.selectQueries.selectTableFields, tablename);
	rs = db.execute(SqlQueries.selectQueries.selectTableFields, [tablename]);
	console.debug(rs.isValidRow());
	while (rs.isValidRow()) {
		fieldsList.push(rs.field(0));
		rs.next();
	}
	rs.close();
	return fieldsList;
}

LocalDataProvider.prototype.createTable = function(tablename, fieldsNames, fieldsTypes) {
	var query = "CREATE TABLE " +  tablename + "(";
	if (fieldsNames.length == 0) {
		return false;
	} else {
		for (var i = 0; i < fieldsNames.length; i++) {
			query += fieldsNames[i] + " " + fieldsTypes[i];
			if (i != fieldsNames.length) {
				query += ", ";
			}
		}
		query += ")";
		alert(query);
	}
}
