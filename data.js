// interface DataProvider

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