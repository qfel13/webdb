// offline module
function initOffline() {
	var permission = google.gears.factory.getPermission("WebDb by Q");
	console.debug("permission=", permission);
	if (!permission) {
		infoElement = document.getElementById("gearsinfo");
		infoElement.innerHTML = "You haven't allowed this web application to use Gears. If you want to accept this application you have to refresh this page. If you banned this application from access to Gears you have to remove it from banned applications in gears preferences";
		return;
	}
	//TODO: show indicator that initialization is in progress 
	//createLocalServer();
	var success = initializeDatabase();
	if (success) {
		hideElement("goOfflineLink");
		showElement("workOfflineLink");
	} else {
		//TODO: show information that initialization failed and what to do with it
	}

	showTableList();
}

function showTableList() {
	var ldp = new LocalDataProvider();
	var tablelist = ldp.getTableList();
	var el = document.getElementById("tableListEntries");
	console.debug(tablelist);
	var listStr = "";
	for (var i in tablelist) {
		listStr += "<div class=\"tableborder\"><div class=\"tablename\">" 
						+ "<a href=\"javascript: showTable(" + tablelist[i] + ");\">"
						+ tablelist[i] + "</a>" + "</div>";
		var fieldslist = ldp.getTableFields(tablelist[i]);
		for (var i in fieldslist) {
			listStr += "<div class=\"fieldname\">" + fieldslist[i] + "</div>";
		}
		listStr += "</div>";
	}
	el.innerHTML = listStr;
}

function workOffline() {
	hideElement("workOfflineLink");
	showElement("workOnlineLink");
}

function workOnline() {
	hideElement("workOnlineLink");
	showElement("workOfflineLink");
}