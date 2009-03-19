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
	rs = db.execute(SqlQueries.selectQueries.selectTableList);
	while (rs.isValidRow) {
		tableList.append(rs.field(0));
		rs.next();
	}
	return tableList;
}

function RemoteDataProvider() {
	
}

//LocalDataProvider.prototype.getTableList

//RemoteDataProvider.prototype.getTableList