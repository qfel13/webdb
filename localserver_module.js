// localserver module 
function storeComplete(details) {
	completeCall++;
	var oncompleteElement = document.getElementById("localserver_oncomplete");
	if ("" == details.newVersion) {
		oncompleteElement.innerHTML = "nothing changed #" + completeCall;
	} else {
		oncompleteElement.innerHTML = "store oncomplete #" + details.newVersion + "#";
	}
	console.debug("store oncomplete ", details.newVersion);
}

function storeProgress(details) {
	var onprogressElement = document.getElementById("localserver_onprogress");
	onprogressElement.innerHTML = "store onprogress " + details.filesComplete + "/" + details.filesTotal;
	console.debug("store onprogress ", details.filesComplete, "/", details.filesTotal);
}

function storeError(error) {
	var onerrorElement = document.getElementById("localserver_onerror");
	onerrorElement.innerHTML = "store onerror " + error.message;
	console.debug("store oncomplete ", error.message);
}

function createLocalServer() {
	completeCall = 0;
	console.debug("createLocalServer");
	var localServer = google.gears.factory.create('beta.localserver');
	var store = localServer.createManagedStore('webdb.localserver');
	store.manifestUrl = 'manifest.json';
	console.debug(store);
	//TODO: nie przypisywac kolejny raz funkcji bo wtedy mamy wiele handlerow
	store.oncomplete = storeComplete;
	store.onprogress = storeProgress;
	store.onerror = storeError;
	store.checkForUpdate();
}