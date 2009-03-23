function DataProvider() {
	this.localData = new LocalDataProvider();
	this.remoteData = new RemoteDataProvider();
	this.setDataProviderToLocal();
}

DataProvider.prototype.setDataProviderToLocal = function() {
	this.data = this.localData;
}

DataProvider.prototype.setDataProviderToRemote = function() {
	this.data = this.remoteData;
}

DataProvider.prototype.getTableList = function() {
	return this.data.getTableList();
}

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

function RemoteDataProvider() {
	
}

//LocalDataProvider.prototype.getTableList

//RemoteDataProvider.prototype.getTableList