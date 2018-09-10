function GetList(ProductType){
	var request = new XMLHttpRequest();
	request.open("GET", "http://localhost:63796/api/" + ProductType, true);
	request.onload = function(){
		var data = JSON.parse(this.response);
		if(request.status >= 200 && request.status < 400){
			displaylist.innerHTML = "";
			var table = document.createElement("table");
			var row = document.createElement("tr");
			var col = document.createElement("th");
			var node = document.createTextNode("Id");
			col.appendChild(node);
			row.appendChild(col);
			var col = document.createElement("th");
			node = document.createTextNode("Name");
			col.appendChild(node);
			row.appendChild(col);
			var col = document.createElement("th");
			node = document.createTextNode("IsSaved");
			col.appendChild(node);
			row.appendChild(col);
			var col = document.createElement("th");
			node = document.createTextNode("IsBooked");
			col.appendChild(node);
			row.appendChild(col);
			var col = document.createElement("th");
			node = document.createTextNode("Price");
			col.appendChild(node);
			row.appendChild(col);
			var col = document.createElement("th");
			node = document.createTextNode("Book or Save");
			col.appendChild(node);
			row.appendChild(col);
			table.appendChild(row);
			var list = document.getElementById("displaylist");
			list.appendChild(table);
			for(let i = 0; i < data.length; i++){
				var row = document.createElement("tr");
				var col = document.createElement("td");
				node = document.createTextNode(data[i].ID);
				col.appendChild(node);
				row.appendChild(col);
				var col = document.createElement("td");
				node = document.createTextNode(data[i].Name);
				col.appendChild(node);
				row.appendChild(col);
				var col = document.createElement("td");
				node = document.createTextNode(data[i].IsSaved);
				col.appendChild(node);
				row.appendChild(col);
				var col = document.createElement("td");
				node = document.createTextNode(data[i].IsBooked);
				col.appendChild(node);
				row.appendChild(col);
				var col = document.createElement("td");
				node = document.createTextNode(data[i].Price);
				col.appendChild(node);
				row.appendChild(col);
				var col = document.createElement("button");
			    var b = 'book'+[i+1];
				col.setAttribute("id",b);
				node = document.createTextNode("Book");
				col.appendChild(node);
				row.appendChild(col);
				var col = document.createElement("button");
				var s = 'save'+[i+1];
				col.setAttribute("id",s);
				node = document.createTextNode("Save");
				col.appendChild(node);
				row.appendChild(col);
				table.appendChild(row);
				list.appendChild(table);
				document.getElementById(b).addEventListener("click", function(){
					book(data[i].ID,ProductType);
				});
				document.getElementById(s).addEventListener("click", function(){
					save(data[i].ID,ProductType);
				});
			}
		}
	}
	request.send();
}

function book(id,type) {
	json = {
		"id":id,
		"activity":"Book"
	}
	json =JSON.stringify(json);
	var server = new XMLHttpRequest();
	server.open("PUT","http://localhost:63796/api/" + type, true);
	server.onload = function(){
		GetList(type);
	}
	server.setRequestHeader("Content-Type", "application/json; charset=utf-8");
	server.send(json);
}

function save(id,type) {
	json = {
		"id":id,
		"activity":"Save"
	}
	json =JSON.stringify(json);
	var server = new XMLHttpRequest();
	server.open("PUT","http://localhost:63796/api/" + type, true);
	server.onload = function(){
		GetList(type);
	}
	server.setRequestHeader("Content-Type", "application/json; charset=utf-8");
	server.send(json);
}